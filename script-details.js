// script-details.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('add-to-cart');
    const notification = document.getElementById('notification');

    addToCartBtn.addEventListener('click', () => {
        const product = {
            title: document.getElementById('toile-title').innerText,
            price: document.getElementById('toile-price').innerText.replace('Prix : ', '').replace('€', ''),
            image: document.querySelector('.toile-image img').src,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Confirmation visuelle
        notification.innerText = 'Ajouté au panier !';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);

        // Optionnel : changer la couleur du bouton
        addToCartBtn.style.backgroundColor = '#222';
    });
});
