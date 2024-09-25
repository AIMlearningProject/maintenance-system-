import React, { useState } from 'react';
import RepairForm from './components/RepairForm';
import RepairList from './components/RepairList';
import RepairCompletion from './components/RepairCompletion';
import CompletedRepair from './components/CompletedRepair';
import './App.css';

function App() {
    const [repairs, setRepairs] = useState([]);
    const [completedRepairs, setCompletedRepairs] = useState([]);

    // Function to add new repair to the list
    const addRepair = (repair) => {
        console.log(repair);
        setRepairs([...repairs, repair]);
    };

    // Function to add completed repair details
    const addCompletion = (completion) => {
        console.log(completion);
        setCompletedRepairs([...completedRepairs, completion]);
    };

    // Function to trigger print for the repair list
    const printList = () => {
        window.print();
    };

    return (
        <div className="app-container">
            <h1>Maintenance System</h1>

            {/* Repair form for adding new repairs */}
            <RepairForm addRepair={addRepair} />

            {/* Button to print the list */}
            <button className="print-button" onClick={printList}>
                Print Repair List
            </button>

            <hr />

            {/* List of repairs */}
            <RepairList repairs={repairs} />

            {/* Section to handle repair completion */}
            <RepairCompletion addCompletion={addCompletion} />

            {/* Display completed repairs */}
            <h2>Completed Repairs</h2>
            {completedRepairs.length === 0 ? (
                <p>No completed repairs yet</p>
            ) : (
                completedRepairs.map((comp, index) => (
                    <CompletedRepair key={index} repair={comp} />
                ))
            )}
        </div>
    );
}

export default App;
