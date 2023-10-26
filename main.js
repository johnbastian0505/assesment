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
document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('popup-container');
    const closeButton = document.getElementById('close-button');
    const showPopupButton = document.getElementById('show-popup-button');

    // Function to show the popup
    function showPopup() {
        popupContainer.style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        popupContainer.style.display = 'none';
    }

    // Show the popup when the button is clicked
    showPopupButton.addEventListener('click', showPopup);

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', closePopup);

    // Close the popup when the user clicks anywhere outside the content
    window.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            closePopup();
        }
    });
});

