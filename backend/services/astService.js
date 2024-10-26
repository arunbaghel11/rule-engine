class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

// Function to parse rule string into AST (for simplicity, using pseudo parsing logic)
exports.parseRuleStringToAST = (ruleString) => {
    // Example: you can implement this with proper string parsing logic
    // e.g. "age > 30 AND department = 'Sales'" -> into a Node structure
    const ast = new Node('operator', 
        new Node('operand', null, null, { age: '> 30' }), 
        new Node('operand', null, null, { department: 'Sales' })
    );
    return ast;
};

// Function to combine ASTs
exports.combineASTs = (astArray) => {
    // Combine ASTs by AND/OR logic, e.g., root is AND, left and right are combined ASTs
    let combinedAST = astArray[0];
    for (let i = 1; i < astArray.length; i++) {
        combinedAST = new Node('operator', combinedAST, astArray[i], 'AND'); // Combine with AND/OR logic
    }
    return combinedAST;
};

// Function to evaluate AST against user data
exports.evaluateAST = (ast, data) => {
    if (!ast) return false;
    
    if (ast.type === 'operand') {
        const [key, condition] = Object.entries(ast.value)[0];
        const [operator, value] = condition.split(' ');
        switch (operator) {
            case '>':
                return data[key] > Number(value);
            case '<':
                return data[key] < Number(value);
            case '=':
                return data[key] === value;
            default:
                return false;
        }
    }
    
    if (ast.type === 'operator') {
        const leftResult = this.evaluateAST(ast.left, data);
        const rightResult = this.evaluateAST(ast.right, data);
        if (ast.value === 'AND') return leftResult && rightResult;
        if (ast.value === 'OR') return leftResult || rightResult;
    }
};
