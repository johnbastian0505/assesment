document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuIcon.addEventListener('click', function() {
        // Toggle the mobile menu's visibility
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });
});
// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('popup-container');
    const showPopupButton = document.getElementById('show-popup-button');
    const closeButton = document.getElementById('close-button');

    // Show the popup when the button is clicked
    showPopupButton.addEventListener('click', function() {
        popupContainer.style.display = 'block';
    });

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    // Close the popup when the user clicks outside the content
    window.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});

