let cart = [];

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let name = this.dataset.name;
            let price = parseInt(this.dataset.price);
            let size = this.previousElementSibling.value;
            cart.push({ name, price, size });
            alert(name + " added to cart!");
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    if (document.getElementById("cart-items")) {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartItems = document.getElementById("cart-items");
        let totalPrice = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price} (${item.size})`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        document.getElementById("total-price").textContent = totalPrice;
    }
});
