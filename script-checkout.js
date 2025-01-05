// script-checkout.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsTable = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
	const totalfinal = document.getElementById('final-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsTable.innerHTML = ''; // Réinitialise le tableau
        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.title}" style="width:50px;"></td>
                <td>${item.title}</td>
                <td>${item.price}€</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
                </td>
                <td class="item-total">${(item.price * item.quantity).toFixed(2)}€</td>
                <td><button data-index="${index}" class="remove-btn">❌</button></td>
            `;
            cartItemsTable.appendChild(row);
            total += item.price * item.quantity;
        });

        totalPrice.innerText = `Total Général : ${total.toFixed(2)}€`;
        totalfinal.innerText = `Montant Total : ${total.toFixed(2)}€`;
		
		localStorage.setItem('cart', JSON.stringify(cart));
    }

    cartItemsTable.addEventListener('change', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value) || 1;
            renderCart();
        }
    });

    cartItemsTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            renderCart();
        }
    });

    renderCart();
});


document.getElementById("shipping-form").addEventListener("input", function() {
    let allFieldsFilled = [...this.elements].every(input => input.value.trim() !== "");
    document.getElementById("confirm-button").disabled = !allFieldsFilled;
});

document.getElementById("payment-form").addEventListener("input", function() {
    let allFieldsFilled = [...this.elements].every(input => input.value.trim() !== "");
    document.getElementById("confirm-button").disabled = !allFieldsFilled;
});







// Sélection des onglets et contenu
const tabShipping = document.getElementById('tab-shipping');
const tabPayment = document.getElementById('tab-payment');
const contentShipping = document.getElementById('content-shipping');
const contentPayment = document.getElementById('content-payment');
const toPaymentButton = document.getElementById('to-payment');

// Changement d'onglets
tabShipping.addEventListener('click', () => {
    tabShipping.classList.add('active');
    tabPayment.classList.remove('active');
    contentShipping.classList.add('active');
    contentPayment.classList.remove('active');
});

tabPayment.addEventListener('click', () => {
    tabPayment.classList.add('active');
    tabShipping.classList.remove('active');
    contentPayment.classList.add('active');
    contentShipping.classList.remove('active');
});

// Bouton "Suivant : Paiement"
toPaymentButton.addEventListener('click', () => {
    tabPayment.click();
});

// Validation dynamique des champs (exemple pour numéro de carte)
const cardNumber = document.getElementById('card-number');
cardNumber.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
});



document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirm-payment');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    confirmButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Récupération des informations du formulaire de livraison
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const postalCode = document.getElementById('postal-code').value;
        const country = document.getElementById('country').value;
        const instructions = document.getElementById('instructions').value;

        // Récupération des informations de paiement
        const cardNumber = document.getElementById('card-number').value;
        const cardName = document.getElementById('card-name').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Vérifie que toutes les informations sont remplies
        if (firstName && lastName && email && phone && address && city && postalCode && country && instructions && cardNumber && cardName && expiryDate && cvv) {
            const orderData = {
                customer: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    city,
                    postalCode,
                    country,
                    instructions
                },
                payment: {
                    cardNumber: cardNumber.slice(-4),
                    cardName,
                    expiryDate,
                    cvv
                },
                totalAmount: document.getElementById('final-total').textContent,
                cart: cart
            };

            // Sauvegarde les données dans sessionStorage
            sessionStorage.setItem('orderData', JSON.stringify(orderData));

            // Redirige vers la page de confirmation
            window.location.href = 'confirmation.html';
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});







