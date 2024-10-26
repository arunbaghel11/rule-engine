const Rule = require('../models/ruleModel');
const { parseRuleStringToAST, combineASTs, evaluateAST } = require('../services/astService');

// Create Rule - Parse rule string into AST and store it
exports.createRule = (req, res) => {
    const ruleString = req.body.rule;
    const ruleAST = parseRuleStringToAST(ruleString); // Parse to AST
    const newRule = new Rule({ ruleName: req.body.ruleName, ruleAST });
    
    newRule.save((err, rule) => {
        if (err) return res.status(500).send(err);
        res.json(rule);
    });
};

// Combine multiple rules into a single AST
exports.combineRules = (req, res) => {
    const { ruleIds } = req.body;
    Rule.find({ _id: { $in: ruleIds } }, (err, rules) => {
        if (err) return res.status(500).send(err);
        const combinedAST = combineASTs(rules.map(rule => rule.ruleAST)); // Combine ASTs
        res.json(combinedAST);
    });
};

// Evaluate a rule against user data
exports.evaluateRule = (req, res) => {
    const { ruleAST, userData } = req.body;
    const result = evaluateAST(ruleAST, userData);
    res.json({ result });
};
