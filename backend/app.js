// backend/app.js 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const repairRoutes = require('./routes/repair');

const app = express();
app.use(bodyParser.json()); // parse JSON bodies

// CORS options
const corsOptions = {
    origin: ['https://your-frontend-domain.com', 'https://maintenance-system-e76e.onrender.com'], // add the domains that need to access your backend
    methods: 'GET,POST,PUT,DELETE', // allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // allowed headers
    credentials: true // allows cookies to be sent
};

// Use CORS with options
app.use(cors(corsOptions));

// Use the repair routes
app.use('/api/repairs', repairRoutes);

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Backend server is running on http://localhost:5000');
});
