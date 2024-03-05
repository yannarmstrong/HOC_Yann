// script.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    
    // Check the saved preference in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }

    // Toggle dark mode when checkbox is clicked
    darkModeToggle.addEventListener('change', function () {
        if (darkModeCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
