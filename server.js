const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// Booking endpoint
app.post('/api/bookings', (req, res) => {
    const { tour, name, email, date } = req.body;
    // TODO: Save to database (e.g., MongoDB)
    console.log(`Booking: ${tour} for ${name} (${email}) on ${date}`);
    res.json({ message: 'Booking received!' });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // TODO: Save to database or send email
    console.log(`Contact: ${name} (${email}) - ${message}`);
    res.json({ message: 'Message received!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:{222}`);
});