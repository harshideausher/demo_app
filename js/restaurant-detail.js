// Restaurant Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab buttons functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically filter menu items based on the selected category
            // For demo purposes, we're just toggling the active state
        });
    });
    
    // Favorite button functionality
    const favoriteBtn = document.querySelector('.favorite-btn');
    let isFavorite = false;
    
    favoriteBtn.addEventListener('click', function() {
        isFavorite = !isFavorite;
        
        if (isFavorite) {
            this.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            this.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
    
    // Add to cart button functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    let cartItemCount = 3; // Starting with 3 items in cart for demo
    let cartTotal = 18.97; // Starting total for demo
    
    // Update cart display
    const updateCartDisplay = () => {
        const viewCartBtn = document.querySelector('.view-cart-btn');
        viewCartBtn.querySelector('span:first-of-type').textContent = `View Cart (${cartItemCount} items)`;
        viewCartBtn.querySelector('.cart-total').textContent = `$${cartTotal.toFixed(2)}`;
    };
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the price of the item
            const priceElement = this.closest('.menu-item-bottom').querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            
            // Update cart count and total
            cartItemCount++;
            cartTotal += price;
            
            // Update the cart display
            updateCartDisplay();
            
            // Animation effect
            this.classList.add('adding');
            
            setTimeout(() => {
                this.classList.remove('adding');
                
                // Show a small notification
                const notification = document.createElement('div');
                notification.className = 'add-notification';
                notification.textContent = 'Added to cart!';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.classList.add('show');
                    
                    setTimeout(() => {
                        notification.classList.remove('show');
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 1500);
                }, 10);
            }, 300);
        });
    });
    
    // Promo button functionality
    const promoBtn = document.querySelector('.promo-btn');
    
    promoBtn.addEventListener('click', function() {
        // Here you would typically apply the promo code
        // For demo purposes, we'll just redirect to checkout
        window.location.href = 'checkout.html';
    });
    
    // Scroll behavior for menu categories
    const menuCategories = document.querySelector('.category-tabs');
    
    // Smooth scroll for horizontal scrolling with mouse wheel
    menuCategories.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            this.scrollLeft += e.deltaY;
        }
    }, { passive: false });
    
    // Add CSS for notification
    const style = document.createElement('style');
    style.textContent = `
        .add-notification {
            position: fixed;
            bottom: 150px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 14px;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .add-notification.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        
        .add-to-cart-btn.adding {
            transform: scale(1.2);
        }
    `;
    document.head.appendChild(style);
}); 