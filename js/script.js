document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const products = {
        1: { title: "Summer Dress", price: "$78", image: "images/c1.png" },
        2: { title: "Men's Shirt", price: "$47", image: "images/c6.png" }
    };

    if (products[productId]) {
        document.getElementById("product-title").innerText = products[productId].title;
        document.getElementById("product-price").innerText = products[productId].price;
        document.getElementById("main-image").src = products[productId].image;
    }

    document.querySelectorAll(".small-img").forEach(img => {
        img.addEventListener("click", function() {
            document.getElementById("main-image").src = this.src;
        });
    });

    document.getElementById("add-to-cart").addEventListener("click", function() {
        alert("Product added to cart!");
    });
});