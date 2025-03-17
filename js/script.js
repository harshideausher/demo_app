// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Category selection
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Favorite button functionality
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle active class for color change
            this.classList.toggle('active');
            
            // Change icon color when active
            if (this.classList.contains('active')) {
                this.style.color = '#FF4B3A';
            } else {
                this.style.color = '#888';
            }
        });
    });
    
    // Bottom navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Here you would typically handle page navigation
            // For demo purposes, we're just toggling the active state
        });
    });
    
    // Search functionality (placeholder for demo)
    const searchInput = document.querySelector('.search-container input');
    
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 2px rgba(255, 75, 58, 0.3)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });
    
    // Filter button click event
    const filterBtn = document.querySelector('.filter-btn');
    
    filterBtn.addEventListener('click', function() {
        // Here you would typically show a filter modal
        alert('Filter options would appear here!');
    });
}); 