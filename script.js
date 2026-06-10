// ===============================
// AMAZON CLONE
// ===============================

$(document).ready(function () {

    // =========================
    // JSON PRODUCT DATABASE
    // =========================
    const products = [
        { id: 1, name: "Toy Car", category: "Toys", price: 25 },
        { id: 2, name: "Smart Watch", category: "Electronics", price: 120 },
        { id: 3, name: "Fitness Band", category: "Fitness", price: 45 },
        { id: 4, name: "Kindle Reader", category: "Books", price: 90 },
        { id: 5, name: "Headphones", category: "Electronics", price: 60 },
        { id: 6, name: "Yoga Mat", category: "Fitness", price: 20 }
    ];


    // =========================
    // CART SYSTEM
    // =========================
    let cart = [];

    function updateCart() {
        $(".cart-count").text(cart.length);
    }

    updateCart();


    // =========================
    // SEARCH FUNCTION (JSON)
    // =========================
    $(".search-icon").click(function () {

        let query = $(".search-input").val().toLowerCase().trim();

        if (!query) {
            alert("Please enter something to search");
            return;
        }

        let results = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            let message = "Search Results:\n\n";

            results.forEach(p => {
                message += `${p.name} - $${p.price}\n`;
            });

            alert(message);
        } else {
            alert("No products found");
        }
    });


    // =========================
    // ADD TO CART (BOX CLICK)
    // =========================
    $(".box").click(function () {

        let title = $(this).find("h2").text().toLowerCase();

        let product = products.find(p =>
            p.name.toLowerCase().includes(title.split(" ")[0])
        );

        if (product) {
            cart.push(product);
            updateCart();
            alert(product.name + " added to cart!");
        } else {
            cart.push({ id: Date.now(), name: title });
            updateCart();
            alert("Item added to cart!");
        }
    });


    // =========================
    // BACK TO TOP
    // =========================
    $(".firstpanel").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    // =========================
    // NAVBAR SHADOW ON SCROLL
    // =========================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").css("box-shadow", "0 2px 10px rgba(0,0,0,0.2)");
        } else {
            $(".navbar").css("box-shadow", "none");
        }
    });


    // =========================
    // LANGUAGE SELECT
    // =========================
    $(".lanoption").change(function () {
        alert("Language selected: " + $(this).val());
    });


    // =========================
    // ACCOUNT SELECT
    // =========================
    $(".account-sign").change(function () {
        alert("Account option: " + $(this).val());
    });


    // =========================
    // DEALS CLICK
    // =========================
    $(".deals").click(function () {
        alert("Redirecting to today's deals...");
    });

});