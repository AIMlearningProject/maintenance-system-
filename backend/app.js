// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const repairRoutes = require('./routes/repair');

const app = express();
app.use(bodyParser.json()); // parse JSON bodies
app.use(cors()); // handle CORS

// Use the repair routes
app.use('/api/repairs', repairRoutes);

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Backend server is running on http://localhost:5000');
});
