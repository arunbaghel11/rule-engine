import React from 'react';
import RuleForm from './components/RuleForm';
import EvaluationForm from './components/EvaluationForm';

function App() {
    return (
        <div className="App">
            <h1>Rule Engine</h1>
            <RuleForm />
            <EvaluationForm />
        </div>
    );
}

export default App;
