// Menu Filter Functionality
const menuItems = [
    { category: 'burgers', name: 'Classic Cheeseburger', price: '₹199' },
    { category: 'burgers', name: 'Spicy Chicken Burger', price: '₹249' },
    { category: 'pizza', name: 'Margherita Pizza', price: '₹299' },
    { category: 'pizza', name: 'Pepperoni Pizza', price: '₹349' },
    { category: 'beverages', name: 'Fresh Lime Soda', price: '₹99' },
    { category: 'beverages', name: 'Oreo Milkshake', price: '₹149' },
];

// Function to filter menu items by category
function filterMenu(category) {
    const menuGrid = document.getElementById('menu-items');
    menuGrid.innerHTML = ''; // Clear the current menu items

    const filtered = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filtered.forEach(item => {
        menuGrid.innerHTML += `
            <div class="menu-item">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
    });

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Add event listeners to tab buttons
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu with all items
    filterMenu('all');

    // Add click event listeners to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterMenu(category);
        });
    });

    // Redirect to Order Food Section
    document.getElementById('viewMenuBtn').addEventListener('click', () => {
        document.querySelector('#order-food').scrollIntoView({ behavior: 'smooth' });
    });

    // Redirect to Booking Section
    document.getElementById('bookNowBtn').addEventListener('click', () => {
        document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
    });
});

// Generate Receipt Number
function generateReceiptNumber() {
    return `REC-${Math.floor(Math.random() * 1000000)}`;
}

// Send Email Notification (Simulated)
function sendEmailNotification(email, subject, message) {
    console.log(`Email sent to ${email}: ${subject} - ${message}`);
}

// Order Food Form Submission
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value;
    const email = document.getElementById('orderEmail').value;
    const item = document.getElementById('orderItem').value;
    const quantity = document.getElementById('orderQuantity').value;

    const receiptNumber = generateReceiptNumber();
    const receipt = document.getElementById('orderReceipt');
    receipt.innerHTML = `
        <h3>Order Confirmed!</h3>
        <p>Receipt Number: ${receiptNumber}</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Item: ${item}</p>
        <p>Quantity: ${quantity}</p>
    `;
    receipt.style.display = 'block';

    // Send email notification
    sendEmailNotification(email, 'Order Confirmation', `Your order (${receiptNumber}) for ${item} has been placed.`);

    // Reset form
    e.target.reset();
});

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookingName').value;
    const email = document.getElementById('bookingEmail').value;
    const package = document.getElementById('bookingPackage').value;
    const time = document.getElementById('bookingTime').value;

    alert('Booking Successful!\nWe will confirm your session shortly.');

    // Send email notification
    sendEmailNotification(email, 'Booking Confirmation', `Your booking for ${package} at ${time} has been confirmed.`);

    // Reset form
    e.target.reset();
});