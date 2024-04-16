document.addEventListener("DOMContentLoaded", function() {
    const products = [
      {
        title: "Men's T-Shirt",
        price: 19.99,
        description: "Comfortable cotton t-shirt for men.",
        image: "tshirt.jpg"
      },
      {
        title: "Men's Hoodies",
        price: 34.99,
        description: "Stretchable denim jeans for women.",
        image: "jeans.jpg"
      },
      {
        title: "Men's Oversized T-Shirt",
        price: 24.99,
        description: "Stylish sneakers for men and women.",
        image: "sneakers.jpg"
      },
      {
        title: "Men's Oversized Pants",
        price: 25.99,
        description: "Stylish sneakers for men and women.",
        image: "sneakers.jpg"
      }
      
    ];
  
    const productList = document.getElementById("product-list");
  
    // Function to display products on the webpage
    function displayProducts() {
      productList.innerHTML = ""; // Clear existing products
  
      products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
  
        const productInfo = `
          <img src="${product.image}" alt="${product.title}" class="product-img">
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <p class="product-description">${product.description}</p>
          </div>
        `;
  
        productItem.innerHTML = productInfo;
        productList.appendChild(productItem);
      });
    }
  
    // Call the function to display products when the page loads
    displayProducts();
  });
  