// Menu Hamburger
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Défilement vers la galerie
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Popup Promotionnelle
window.onload = () => {
    const popup = document.getElementById('promo-popup');
    setTimeout(() => {
        popup.style.display = 'block';
    }, 2000);
};

function closePopup() {
    document.getElementById('promo-popup').style.display = 'none';
}
