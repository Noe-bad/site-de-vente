// Fonction de suivi de progression dans les termes et conditions
window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    const progressBar = document.querySelector('.progress-bar');

    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
});

// Affichage d'une popup lorsque l'utilisateur atteint la fin de la page
window.addEventListener('scroll', () => {
    const bottom = document.documentElement.scrollHeight - window.innerHeight === window.scrollY;
    if (bottom) {
        setTimeout(() => {
            alert("Merci de lire attentivement nos termes et conditions avant de poursuivre.");
        }, 500);
    }
});
