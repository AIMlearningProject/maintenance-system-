// backend/models/repairModel.js
const repairModel = {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    product: 'TEXT',
    model: 'TEXT',
    modelNumber: 'TEXT',
    purchaseDate: 'TEXT',
    receiptNumber: 'TEXT',
    warranty: 'TEXT',
    faultDescription: 'TEXT',
    leaseBike: 'TEXT',
    customerDetails: 'TEXT',
    serviceReceptionDate: 'TEXT',
    serviceExecutionDate: 'TEXT',
    performedProcedures: 'TEXT',
    serviceAmount: 'REAL',
    spareParts: 'TEXT',
    work: 'REAL',
    totalAmount: 'REAL'
};

module.exports = repairModel;
