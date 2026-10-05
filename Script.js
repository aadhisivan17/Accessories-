let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(name + " added to cart!");
}

function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "YOUR CART\n\n";
    let total = 0;

    cart.forEach((item, index) => {

        message +=
            (index + 1) + ". " +
            item.name +
            " - ₹" +
            item.price +
            "\n";

        total += item.price;
    });

    message += "\n----------------";
    message += "\nTotal: ₹" + total;

    alert(message);
}

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}
