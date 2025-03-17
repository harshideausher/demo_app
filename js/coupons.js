// Coupons Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.coupon-tabs .tab-btn');
    const couponContainers = document.querySelectorAll('.coupons-container');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the tab to show
            const tabToShow = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all coupon containers
            couponContainers.forEach(container => container.classList.add('hidden'));
            
            // Show the selected container
            document.getElementById(`${tabToShow}-coupons`).classList.remove('hidden');
        });
    });
    
    // Apply coupon functionality
    const applyButtons = document.querySelectorAll('.apply-btn:not(.disabled)');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the coupon code
            const couponCode = this.closest('.coupon-card').querySelector('h3').textContent;
            
            // Show confirmation
            showNotification(`Coupon ${couponCode} applied!`);
            
            // In a real app, you would store this in localStorage or send to a server
            // For demo purposes, we'll just redirect to checkout with the coupon applied
            setTimeout(() => {
                window.location.href = 'checkout.html?coupon=' + couponCode;
            }, 1500);
        });
    });
    
    // Check if there's a coupon in the URL (coming from another page)
    const urlParams = new URLSearchParams(window.location.search);
    const couponFromUrl = urlParams.get('coupon');
    
    if (couponFromUrl) {
        showNotification(`Coupon ${couponFromUrl} is ready to use!`);
    }
    
    // Helper function to show notifications
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'coupon-notification';
        notification.textContent = message;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.classList.add('show');
            
            // Hide after some time
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        }, 10);
    }
    
    // Add CSS for notification
    const style = document.createElement('style');
    style.textContent = `
        .coupon-notification {
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background-color: #333;
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .coupon-notification.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;
    document.head.appendChild(style);
}); 