import React, { useState } from 'react';

function RepairForm({ addRepair }) {
    const [formData, setFormData] = useState({
        productModel: '',
        purchaseDate: '',
        receiptNumber: '',
        warrantyValid: false,
        faultDescription: '',
        leasingBike: false,
        customerName: '',
        customerContact: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRepair(formData);
        setFormData({
            productModel: '',
            purchaseDate: '',
            receiptNumber: '',
            warrantyValid: false,
            faultDescription: '',
            leasingBike: false,
            customerName: '',
            customerContact: '',
        });
    };

    return (
        <div className="repair-form-container">
            <h2>Product to be Repaired</h2>
            <form onSubmit={handleSubmit} className="repair-form-grid">
                <label>Product Model</label>
                <input
                    type="text"
                    name="productModel"
                    value={formData.productModel}
                    onChange={handleChange}
                    required
                />

                <label>Purchase Date</label>
                <input
                    type="date"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                />

                <label>Receipt Number</label>
                <input
                    type="text"
                    name="receiptNumber"
                    value={formData.receiptNumber}
                    onChange={handleChange}
                />

                <label>Warranty Valid</label>
                <input
                    type="checkbox"
                    name="warrantyValid"
                    checked={formData.warrantyValid}
                    onChange={handleChange}
                />

                <label>Fault Description</label>
                <textarea
                    name="faultDescription"
                    value={formData.faultDescription}
                    onChange={handleChange}
                />

                <label>Leasing Bike</label>
                <input
                    type="checkbox"
                    name="leasingBike"
                    checked={formData.leasingBike}
                    onChange={handleChange}
                />

                <h3>Customer Contact Details</h3>
                
                <label>Customer Name</label>
                <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />

                <label>Customer Contact</label>
                <input
                    type="tel"
                    name="customerContact"
                    value={formData.customerContact}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Repair</button>
            </form>
        </div>
    );
}

export default RepairForm;
