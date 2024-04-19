document.addEventListener("DOMContentLoaded", function() {
    const products = [
      {
        title: "Men's T-Shirt",
        price: 17.99,
        description: "Comfortable cotton t-shirt for men.",
        image: "img/white_tee_front.png"
      },
      {
        title: "Men's Hoodies",
        price: 23.99,
        description: "Comfortable cotton hoodies for men.",
        image: "img/white_hoodie_front.png"
      },
      {
        title: "Men's Buckethat",
        price: 12.99,
        description: "Stylish and comfortable buckethat for your day to day fit",
        image: "img/white_buckethat.png"
      },
      {
        title: "Men's Sweatpants",
        price: 14.99,
        description: "Stylish and comfortable pants for your day to day fit.",
        image: "img/white_sweatpants.png"
      }
      
    ];
function showLoginPopup() {
    // Fetch login popup content and styles dynamically
    Promise.all([
        fetch('account/login-popup.html').then(response => response.text()),
        fetch('css/styles.css').then(response => response.text()) 
    ])
    .then(([html, css]) => {
        // Create a div to hold the popup content
        const popupContainer = document.createElement('div');
        popupContainer.innerHTML = html;

        // Append the popup content to the body
        document.body.appendChild(popupContainer);

        // Apply styles to the popup content
        const styleElement = document.createElement('style');
        styleElement.textContent = css;
        document.head.appendChild(styleElement);

        // Show the login popup
        const loginPopupContent = popupContainer.querySelector('.login-popup-content');
        
        loginPopupContent.classList.add('login-popup'); 
        loginPopupContent.style.display = 'block';
        // Add classes to trigger animation
        loginPopupContent.classList.add('login-popup', 'show'); 
    })
    .catch(error => console.error('Error loading login popup:', error));
}
  
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
  
