 // Filtrage dynamique
const filters = document.querySelectorAll('select');
const cards = document.querySelectorAll('.card');

filters.forEach(filter => {
    filter.addEventListener('change', filterCards);
});

function filterCards() {
    const theme = document.getElementById('theme-filter').value;
    const price = document.getElementById('price-filter').value;
    const popularity = document.getElementById('popularity-filter').value;

    cards.forEach(card => {
        const matchesTheme = theme === 'all' || card.dataset.theme === theme;
        const matchesPrice = price === 'all' || card.dataset.price === price;
        const matchesPopularity = popularity === 'all' || card.dataset.popularity === popularity;

        if (matchesTheme && matchesPrice && matchesPopularity) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}






