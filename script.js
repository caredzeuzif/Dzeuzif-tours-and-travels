// Scroll to tours section
function scrollToTours() {
    document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
}

// Toggle hamburger menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Search tours
function searchTours() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const tours = document.querySelectorAll('.tour-card');
    tours.forEach(tour => {
        const title = tour.querySelector('h3').textContent.toLowerCase();
        tour.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}

// Filter tours by category
function filterTours() {
    const category = document.getElementById('filterCategory').value;
    const tours = document.querySelectorAll('.tour-card');
    tours.forEach(tour => {
        const tourCategory = tour.dataset.category;
        tour.style.display = category === 'all' || tourCategory === category ? 'block' : 'none';
    });
}

// Open booking form modal
function openBookingForm(tourName) {
    document.getElementById('bookingModal').style.display = 'block';
    document.getElementById('tourName').value = tourName;
}

// Close booking form modal
function closeBookingForm() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Handle booking form submission
document.getElementById('bookingForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const tour = document.getElementById('tourName').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tour, name, email, date })
        });
        const result = await response.json();
        alert(result.message);
        closeBookingForm();
    } catch (error) {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    }
});

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });
        const result = await response.json();
        alert(result.message);
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Message failed. Please try again.');
    }
});

// Initialize Google Maps
function initMap() {
    const location = { lat: -1.286389, lng: 36.817223 }; // Nairobi coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    new google.maps.Marker({ position: location, map: map });
}