const mongoose = require('mongoose');

// MongoDB Schema for storing rules and their AST representations
const ruleSchema = new mongoose.Schema({
    ruleName: { type: String, required: true },
    ruleAST: { type: Object, required: true }, // Store the AST structure as a JSON object
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rule', ruleSchema);
