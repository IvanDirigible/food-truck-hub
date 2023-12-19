// script.js

// Get a reference to the menu div
const menu = document.getElementById('menu');

// Get a reference to the button
const button = document.querySelector('.button');

// Hide the menu initially
menu.style.display = 'none';

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Check if the menu is currently hidden
    if (menu.style.display === 'none') {
        // Show the menu when the button is clicked
        menu.style.display = 'block';
    } else {
        // Hide the menu when the button is clicked again
        menu.style.display = 'none';
    }
});
