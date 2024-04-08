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
        // Add the login-popup class
        loginPopupContent.classList.add('login-popup'); 
        loginPopupContent.style.display = 'block';
        // Add classes to trigger animation
        loginPopupContent.classList.add('login-popup', 'show'); 
    })
    .catch(error => console.error('Error loading login popup:', error));
}

function showSignupPopup() {
    // Fetch signup popup content and styles dynamically
    Promise.all([
        fetch('account/signup-popup.html').then(response => response.text()),
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

        // Show the signup popup
        const signupPopupContent = popupContainer.querySelector('.signup-popup-content');
        // Add the signup-popup class
        signupPopupContent.classList.add('signup-popup'); 
        signupPopupContent.style.display = 'block';
        // Add classes to trigger animation
        signupPopupContent.classList.add('signup-popup', 'show');
    })
    .catch(error => console.error('Error loading signup popup:', error));
}


function closePopup(popupClass) {
    // Find the popup content
    const popupContent = document.querySelector('.' + popupClass);
    if (popupContent) {
        // Remove the popup content from its parent node
        popupContent.parentNode.removeChild(popupContent);
    }
}
