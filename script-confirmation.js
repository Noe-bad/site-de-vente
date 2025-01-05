document.addEventListener('DOMContentLoaded', function() {
    // Récupération des données de commande
    const orderData = JSON.parse(sessionStorage.getItem('orderData'));
    const itemsList = document.getElementById('items-list');

    // Vérification si les données sont présentes
    if (orderData) {
        // Remplir les informations de la commande (client, paiement, etc.)
        document.getElementById('order-id').textContent = "ABC123456";  // Exemple de numéro de commande
        document.getElementById('order-date').textContent = new Date().toLocaleDateString();
        document.getElementById('customer-name').textContent = `${orderData.customer.firstName} ${orderData.customer.lastName}`;
        document.getElementById('delivery-address').textContent = `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.postalCode}, ${orderData.customer.country}`;
        document.getElementById('delivery-method').textContent = "Standard";  // Mode de livraison à ajuster
        document.getElementById('payment-method').textContent = "Carte de Crédit";  // Mode de paiement à ajuster
        document.getElementById('card-last4').textContent = orderData.payment.cardNumber;  // Derniers chiffres de la carte
        document.getElementById('order-total').textContent = orderData.totalAmount;

        // Récupération des articles du panier
        const cartItems = orderData.cart || [];

        // Affichage des articles dans le tableau
        cartItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.title}" style="width:50px;"></td>
                <td>${item.title}</td>
                <td>${item.price}€</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}€</td>
            `;
            itemsList.appendChild(row);
        });
    } else {
        alert("Aucune donnée de commande trouvée.");
    }
});
