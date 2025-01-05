// Fonction pour afficher une popup inspirante à la fin de la page
window.addEventListener("scroll", () => {
    const bottom = document.documentElement.scrollHeight - window.innerHeight === window.scrollY;
    if (bottom) {
        setTimeout(() => {
            alert("L'art transforme le monde, laissez-vous inspirer.");
        }, 500);
    }
});
