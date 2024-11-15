document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product_list");

    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            
            // Generate product cards
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "card_item";

                card.innerHTML = `
                    <div class="card_header">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="card_body">
                        <div class="card_item-title">
                            ${product.title}
                        </div>
                        <div class="card_item-price">
                            $${product.price.toFixed(2)}
                        </div>
                        <div class="card_item-desc">
                            ${product.description}
                        </div>
                    </div>
                `;

                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
});
