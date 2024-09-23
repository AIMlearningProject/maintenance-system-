import React, { useState } from 'react';
import RepairForm from './components/RepairForm';
import RepairList from './components/RepairList';
import RepairCompletion from './components/RepairCompletion';
import CompletedRepair from './components/CompletedRepair';
import './App.css';

function App() {
    const [repairs, setRepairs] = useState([]);
    const [completedRepairs, setCompletedRepairs] = useState([]);

    const addRepair = (repair) => {
        console.log(repair);
        setRepairs([...repairs, repair]);
    };

    const addCompletion = (completion) => {
        console.log(completion);
        setCompletedRepairs([...completedRepairs, completion]);
    };

    const printList = () => {
        window.print();
    };

    return (
        <div>
            <h1>Maintenance System</h1>
            <RepairForm addRepair={addRepair} />
            <button onClick={printList} style={{ margin: '10px 0' }}>
                Print Repair List
            </button>
            <hr />
            <RepairList repairs={repairs} />
            <RepairCompletion addCompletion={addCompletion} />
            <h2>Completed Repairs</h2>
            {completedRepairs.map((comp, index) => (
                <CompletedRepair key={index} repair={comp} />
            ))}
        </div>
    );
}

export default App;
