// backend/db/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

// Create the repairs table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS repairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT,
    model TEXT,
    modelNumber TEXT,
    purchaseDate TEXT,
    receiptNumber TEXT,
    warranty TEXT,
    faultDescription TEXT,
    leaseBike TEXT,
    customerDetails TEXT,
    serviceReceptionDate TEXT,
    serviceExecutionDate TEXT,
    performedProcedures TEXT,
    serviceAmount REAL,
    spareParts TEXT,
    work REAL,
    totalAmount REAL
)`);

module.exports = db;
