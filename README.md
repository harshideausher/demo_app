# Food Delivery App Demo

A modern, responsive food delivery web application built with HTML, CSS, and JavaScript. This project implements a clean and intuitive UI for a food delivery service.

## Features

- **Modern UI Design**: Clean, intuitive interface with smooth animations and transitions
- **Responsive Layout**: Works on mobile, tablet, and desktop devices
- **Interactive Elements**: Category selection, favorite toggling, add to cart functionality
- **Coupon System**: Apply and manage discount coupons
- **Multiple Pages**: Home, Restaurant Details, Checkout, and Coupons pages

## Pages

1. **Home Page**: Browse restaurants, popular items, and special offers
2. **Restaurant Detail Page**: View menu items, restaurant information, and add items to cart
3. **Checkout Page**: Review order, apply coupons, and place order
4. **Coupons Page**: View and manage available, used, and expired coupons

## Technologies Used

- HTML5
- CSS3 (with Flexbox and CSS Grid)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Poppins)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the app to explore all features

## Project Structure

```
demo_app/
├── css/
│   ├── styles.css        # Global styles
│   ├── home.css          # Home page specific styles
│   ├── restaurant-detail.css
│   ├── checkout.css
│   └── coupons.css
├── js/
│   ├── script.js         # Global JavaScript
│   ├── home.js           # Home page specific JavaScript
│   ├── restaurant-detail.js
│   ├── checkout.js
│   └── coupons.js
├── images/               # Image assets
├── index.html            # Home page
├── restaurant-detail.html
├── checkout.html
├── coupons.html
└── README.md
```

## Key Implementation Details

- **Modular Code Structure**: Separate CSS and JavaScript files for each page to maintain clean code organization
- **Reusable Components**: Common elements like navigation bars and cards are designed to be reusable
- **Responsive Design**: Flexbox and media queries ensure the app looks great on all devices
- **Interactive Elements**: JavaScript is used to create interactive elements like category selection, favorite buttons, and cart functionality
- **Animations**: Smooth animations and transitions enhance the user experience

## Coupon System

The app includes a comprehensive coupon system with:

- First-time user discounts (WELCOME50)
- Loyalty rewards after completing five orders (LOYAL5)
- Big order discounts for orders above $500 (BIG500)
- Weekend special offers (WEEKEND20)
- Free delivery coupons (FREEDEL)

## Future Enhancements

- User authentication and profile management
- Order history and tracking
- Payment integration
- Restaurant reviews and ratings
- Geolocation for restaurant discovery

## License

MIT License 