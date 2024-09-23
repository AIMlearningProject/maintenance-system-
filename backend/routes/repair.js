// backend/routes/repair.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get all repairs
router.get('/', (req, res) => {
    const query = 'SELECT * FROM repairs';
    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Add a new repair record
router.post('/add', (req, res) => {
    const { product, model, modelNumber, purchaseDate, receiptNumber, warranty, faultDescription, leaseBike, customerDetails } = req.body;

    const query = `INSERT INTO repairs 
                   (product, model, modelNumber, purchaseDate, receiptNumber, warranty, faultDescription, leaseBike, customerDetails, serviceReceptionDate) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [product, model, modelNumber, purchaseDate, receiptNumber, warranty, faultDescription, leaseBike, customerDetails, new Date()];

    db.run(query, params, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

module.exports = router;
