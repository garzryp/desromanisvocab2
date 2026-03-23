let vocab = [];

fetch('vocab.json')
    .then(res => res.json())
    .then(data => {
        vocab = data;
        displayWords(vocab);
    });

function displayWords(words) {
    const list = document.getElementById('vocab-list');
    list.innerHTML = '';

    words.forEach(word => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${word.latin}</strong> (Ch ${word.chapter})<br>
            ${word.english.join(', ')}
        `;
        list.appendChild(li);
    });
}

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();

    const filtered = vocab.filter(word =>
        word.latin.toLowerCase().includes(query) ||
        word.english.some(e => e.toLowerCase().includes(query))
    );

    displayWords(filtered);
});
