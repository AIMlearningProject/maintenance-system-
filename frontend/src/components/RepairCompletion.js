import React, { useState } from 'react';

function RepairCompletion({ addCompletion }) {
    const [executionDate, setExecutionDate] = useState('');
    const [performedProcedures, setPerformedProcedures] = useState('');
    const [serviceAmount, setServiceAmount] = useState('');
    const [spareParts, setSpareParts] = useState('');
    const [work, setWork] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!executionDate || !performedProcedures || !totalAmount) {
            alert("Please fill in all required fields.");
            return;
        }

        const completionData = {
            executionDate,
            performedProcedures,
            serviceAmount,
            spareParts,
            work,
            totalAmount,
        };

        addCompletion(completionData);
        // Clear form fields
        setExecutionDate('');
        setPerformedProcedures('');
        setServiceAmount('');
        setSpareParts('');
        setWork('');
        setTotalAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Complete Repair</h2>
            <label>
                Service/Repair Execution Date:
                <input
                    type="date"
                    value={executionDate}
                    onChange={(e) => setExecutionDate(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Performed Procedures:
                <textarea
                    value={performedProcedures}
                    onChange={(e) => setPerformedProcedures(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Service/Repair Amount:
                <input
                    type="number"
                    value={serviceAmount}
                    onChange={(e) => setServiceAmount(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Spare Parts (incl. VAT):
                <input
                    type="number"
                    value={spareParts}
                    onChange={(e) => setSpareParts(e.target.value)}
                />
            </label>
            <br />
            <label>
                Work:
                <input
                    type="number"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                />
            </label>
            <br />
            <label>
                Total Amount (incl. VAT):
                <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Add Completion</button>
        </form>
    );
}

export default RepairCompletion;
