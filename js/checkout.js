// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Delivery time option selection
    const timeOptions = document.querySelectorAll('.time-option');
    const timeRadios = document.querySelectorAll('input[name="delivery-time"]');
    
    timeRadios.forEach((radio, index) => {
        radio.addEventListener('change', function() {
            // Remove active class from all options
            timeOptions.forEach(option => option.classList.remove('active'));
            
            // Add active class to selected option
            timeOptions[index].classList.add('active');
            
            // If schedule is selected, show time picker (in a real app)
            if (this.id === 'schedule') {
                // For demo purposes, we'll just show an alert
                alert('Time picker would appear here!');
            }
        });
    });
    
    // Change address functionality
    const changeAddressBtn = document.querySelector('.address-section .change-btn');
    
    changeAddressBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // For demo purposes, we'll just show an alert
        alert('Address selection would appear here!');
    });
    
    // Change payment method functionality
    const changePaymentBtn = document.querySelector('.payment-section .change-btn');
    
    changePaymentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // For demo purposes, we'll just show an alert
        alert('Payment method selection would appear here!');
    });
    
    // Place order functionality
    const placeOrderBtn = document.querySelector('.place-order-btn');
    
    placeOrderBtn.addEventListener('click', function() {
        // For demo purposes, we'll just show an alert and redirect
        alert('Order placed successfully!');
        
        // In a real app, you would submit the order to a server
        // and then redirect to an order confirmation page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
}); 