// popup.js

// Function to show the login popup
function showLoginPopup() {
    // Load login popup content dynamically
    fetch('login-popup.html')
    .then(response => response.text())
    .then(html => {
        // Insert the HTML into the document
        document.body.insertAdjacentHTML('beforeend', html);
    })
    .catch(error => console.error('Error loading login popup:', error));
}

// Function to close the login popup
function closeLoginPopup() {
    // Hide the login popup
    document.getElementById('loginPopup').remove();
}

// Add event listener to the login link
document.getElementById('loginLink').addEventListener('click', showLoginPopup);