import React, { useState } from 'react';

function RepairForm({ addRepair }) {
    const [product, setProduct] = useState('');
    const [model, setModel] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [receiptNumber, setReceiptNumber] = useState('');
    const [warrantyValid, setWarrantyValid] = useState(false);
    const [faultDescription, setFaultDescription] = useState('');
    const [leasingBike, setLeasingBike] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [serviceDate, setServiceDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!product || !model || !faultDescription || !name || !phone || !email || !serviceDate) {
            alert("Please fill in all required fields.");
            return;
        }

        const repairData = {
            product,
            model,
            purchaseDate,
            receiptNumber,
            warrantyValid,
            faultDescription,
            leasingBike,
            customer: {
                name,
                phone,
                email,
            },
            serviceDate,
        };

        addRepair(repairData);
        // Clear form fields
        setProduct('');
        setModel('');
        setPurchaseDate('');
        setReceiptNumber('');
        setWarrantyValid(false);
        setFaultDescription('');
        setLeasingBike(false);
        setName('');
        setPhone('');
        setEmail('');
        setServiceDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Product to be Repaired</h2>
            {/* Form fields for product details */}
            <label>Product:</label>
            <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required />
            <br />
            <label>Model:</label>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
            <br />
            <label>Purchase Date:</label>
            <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
            <br />
            <label>Receipt Number:</label>
            <input type="text" value={receiptNumber} onChange={(e) => setReceiptNumber(e.target.value)} />
            <br />
            <label>Warranty Valid:</label>
            <input type="checkbox" checked={warrantyValid} onChange={(e) => setWarrantyValid(e.target.checked)} />
            <br />
            <label>Fault Description:</label>
            <textarea value={faultDescription} onChange={(e) => setFaultDescription(e.target.value)} required />
            <br />
            <label>Leasing Bike:</label>
            <input type="checkbox" checked={leasingBike} onChange={(e) => setLeasingBike(e.target.checked)} />
            <br />
            <h3>Customer Contact Details</h3>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label>Phone Number:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <br />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label>Service Reception Date:</label>
            <input type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} required />
            <br />
            <button type="submit">Submit Repair</button>
        </form>
    );
}

export default RepairForm;
