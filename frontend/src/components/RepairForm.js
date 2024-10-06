import React, { useState } from 'react';

function RepairForm({ addRepair }) {
    const [formData, setFormData] = useState({
        product: '',
        customerName: '',
        customerContact: '',
        // Other fields...
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRepair(formData);
        setFormData({
            product: '',
            customerName: '',
            customerContact: '',
            // Reset other fields...
        });
    };

    return (
        <div className="repair-form-container">
            <h2>Product to be Repaired</h2>
            <form onSubmit={handleSubmit}>
                <label>Product</label>
                <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
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
                
                {/* Add other form fields here */}
                
                <button type="submit">Add Repair</button>
            </form>
        </div>
    );
}

export default RepairForm;
