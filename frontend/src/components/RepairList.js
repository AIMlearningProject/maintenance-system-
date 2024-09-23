import React from 'react';

function RepairList({ repairs }) {
    return (
        <div>
            <h2>Repair List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Reservation #</th>
                        <th>Product</th>
                        <th>Model</th>
                        <th>Fault Description</th>
                        <th>Customer Contact</th>
                        <th>Service Reception Date</th>
                    </tr>
                </thead>
                <tbody>
                    {repairs.map((repair, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{repair.product}</td>
                            <td>{repair.model}</td>
                            <td>{repair.faultDescription}</td>
                            <td>
                                {repair.customer ? `${repair.customer.name} (${repair.customer.phone})` : 'N/A'}
                            </td>
                            <td>{repair.serviceDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RepairList;
