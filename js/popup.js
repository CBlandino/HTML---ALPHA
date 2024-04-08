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
        loginPopupContent.classList.add('login-popup'); // Add the login-popup class
        loginPopupContent.style.display = 'block';
        loginPopupContent.classList.add('login-popup', 'show'); // Add classes to trigger animation
    })
    .catch(error => console.error('Error loading login popup:', error));
}



function closeLoginPopup() {
    // Find the login popup content
    const loginPopupContent = document.querySelector('.login-popup-content');
    if (loginPopupContent) {
        // Remove the login popup content from its parent node
        loginPopupContent.parentNode.removeChild(loginPopupContent);
    }
}
