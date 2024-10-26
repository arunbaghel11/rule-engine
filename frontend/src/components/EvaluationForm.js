import React, { useState } from 'react';

const EvaluationForm = () => {
    const [userData, setUserData] = useState({ age: '', department: '', salary: '', experience: '' });
    
    const handleSubmit = async () => {
        const ruleAST = {}; // Load ruleAST from the backend or use someRuleAST
        const response = await fetch('/api/evaluate_rule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ruleAST, userData })
        });
        const result = await response.json();
        console.log('Evaluation result:', result);
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <input type="number" placeholder="Age" onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
            <input type="text" placeholder="Department" onChange={(e) => setUserData({ ...userData, department: e.target.value })} />
            <input type="number" placeholder="Salary" onChange={(e) => setUserData({ ...userData, salary: e.target.value })} />
            <input type="number" placeholder="Experience" onChange={(e) => setUserData({ ...userData, experience: e.target.value })} />
            <button onClick={handleSubmit}>Evaluate Rule</button>
        </div>
    );
};

export default EvaluationForm;
