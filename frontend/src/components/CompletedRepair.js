import React from 'react';

function CompletedRepair({ repair }) {
    return (
        <div>
            <h4>{repair.executionDate}</h4>
            <p>Performed Procedures: {repair.performedProcedures}</p>
            <p>Service Amount: ${repair.serviceAmount}</p>
            <p>Spare Parts: ${repair.spareParts}</p>
            <p>Work: ${repair.work}</p>
            <p>Total Amount: ${repair.totalAmount}</p>
        </div>
    );
}

export default CompletedRepair;
