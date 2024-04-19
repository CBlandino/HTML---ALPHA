document.addEventListener("DOMContentLoaded", function() {
    const products = [
      {
        title: "Men's T-Shirt",
        price: 17.99,
        description: "Comfortable cotton t-shirt for men.",
        image: ""
      },
      {
        title: "Men's Hoodies",
        price: 23.99,
        description: "Comfortable polyester hoodies for men.",
        image: ""
      },
      {
        title: "Men's Buckethat",
        price: 12.99,
        description: "Stylish and comfotable buckethat for yor day to day fit",
        image: ""
      },
      {
        title: "Men's Sweatpants",
        price: 14.99,
        description: "Stylish and comfotable pants for yor day to day fit.",
        image: ""
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
  