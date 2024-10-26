import React, { useState } from 'react';

const RuleForm = () => {
    const [rule, setRule] = useState('');

    const handleSubmit = async () => {
        const response = await fetch('/api/create_rule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ruleName: "Rule 1", rule })
        });
        const data = await response.json();
        console.log('Created rule:', data);
    };

    return (
        <div>
            <h2>Create Rule</h2>
            <input 
                type="text" 
                value={rule} 
                onChange={(e) => setRule(e.target.value)} 
                placeholder="Enter rule string"
            />
            <button onClick={handleSubmit}>Create Rule</button>
        </div>
    );
};

export default RuleForm;
