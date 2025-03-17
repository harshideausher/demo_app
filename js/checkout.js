// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const timeOptions = document.querySelectorAll('.time-option');
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.querySelector('.apply-coupon-btn');
    const appliedCouponDiv = document.getElementById('applied-coupon');
    const appliedCouponCode = document.getElementById('applied-coupon-code');
    const appliedCouponDesc = document.getElementById('applied-coupon-desc');
    const removeCouponBtn = document.querySelector('.remove-coupon-btn');
    const discountRow = document.getElementById('discount-row');
    const totalAmount = document.getElementById('total-amount');
    const buttonTotal = document.getElementById('button-total');

    // Initial values
    const subtotal = 19.97;
    const deliveryFee = 2.99;
    const tax = 1.80;
    let discount = 9.99; // Default discount
    let total = calculateTotal();

    // Check for coupon in URL parameters
    checkUrlForCoupon();

    // Delivery time selection
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            timeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Check the radio button
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });

    // Apply coupon button
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', function() {
            applyCoupon();
        });
    }

    // Enter key in coupon input
    if (couponInput) {
        couponInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyCoupon();
            }
        });
    }

    // Remove coupon button
    if (removeCouponBtn) {
        removeCouponBtn.addEventListener('click', function() {
            removeCoupon();
        });
    }

    // Function to apply coupon
    function applyCoupon() {
        const couponCode = couponInput.value.trim().toUpperCase();
        
        if (!couponCode) {
            showNotification('Please enter a coupon code', 'error');
            return;
        }

        // Validate coupon code
        const couponDetails = validateCoupon(couponCode);
        
        if (couponDetails) {
            // Show applied coupon
            appliedCouponCode.textContent = couponCode;
            appliedCouponDesc.textContent = couponDetails.description;
            appliedCouponDiv.classList.remove('hidden');
            
            // Update discount in order summary
            discountRow.querySelector('span:first-child').textContent = `Promo (${couponCode})`;
            discount = couponDetails.value;
            discountRow.querySelector('span:last-child').textContent = `-$${discount.toFixed(2)}`;
            
            // Update total
            updateTotal();
            
            // Clear input
            couponInput.value = '';
            
            // Show success notification
            showNotification(`Coupon ${couponCode} applied successfully!`, 'success');
        } else {
            showNotification('Invalid or expired coupon code', 'error');
        }
    }

    // Function to remove coupon
    function removeCoupon() {
        // Hide applied coupon
        appliedCouponDiv.classList.add('hidden');
        
        // Reset discount in order summary
        discountRow.querySelector('span:first-child').textContent = 'Promo (WELCOME50)';
        discount = 9.99; // Reset to default discount
        discountRow.querySelector('span:last-child').textContent = `-$${discount.toFixed(2)}`;
        
        // Update total
        updateTotal();
        
        // Show notification
        showNotification('Coupon removed', 'info');
    }

    // Function to validate coupon
    function validateCoupon(code) {
        // Coupon database (in a real app, this would come from a server)
        const coupons = {
            'WELCOME50': {
                description: '50% off on your first order',
                value: 9.99,
                valid: true
            },
            'LOYAL5': {
                description: '25% off after completing 5 orders',
                value: 5.00,
                valid: true
            },
            'BIG500': {
                description: '$50 off on orders above $500',
                value: 50.00,
                valid: false // Not valid because order is below $500
            },
            'WEEKEND20': {
                description: '20% off on weekend orders',
                value: 4.00,
                valid: isWeekend()
            },
            'FREEDEL': {
                description: 'Free delivery on orders above $30',
                value: deliveryFee,
                valid: subtotal > 30
            }
        };

        return coupons[code] && coupons[code].valid ? coupons[code] : null;
    }

    // Function to check if today is weekend
    function isWeekend() {
        const day = new Date().getDay();
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    }

    // Function to calculate total
    function calculateTotal() {
        return subtotal + deliveryFee + tax - discount;
    }

    // Function to update total display
    function updateTotal() {
        total = calculateTotal();
        totalAmount.textContent = `$${total.toFixed(2)}`;
        buttonTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Function to check URL for coupon parameter
    function checkUrlForCoupon() {
        const urlParams = new URLSearchParams(window.location.search);
        const couponFromUrl = urlParams.get('coupon');
        
        if (couponFromUrl) {
            couponInput.value = couponFromUrl;
            applyCoupon();
        }
    }

    // Function to show notification
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add notification to body
        document.body.appendChild(notification);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 20px;
                border-radius: 8px;
                color: white;
                font-size: 14px;
                font-weight: 500;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideDown 0.3s ease-out forwards, fadeOut 0.5s ease-out 2.5s forwards;
            }
            .notification.success {
                background-color: #4CAF50;
            }
            .notification.error {
                background-color: #F44336;
            }
            .notification.info {
                background-color: #2196F3;
            }
            @keyframes slideDown {
                from { transform: translate(-50%, -20px); opacity: 0; }
                to { transform: translate(-50%, 0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}); 