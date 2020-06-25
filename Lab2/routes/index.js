'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //console.log(req.query);
    var method = req.query.method;

    var num1 = req.query.x;
    var num2 = req.query.y;

    console.log(method + " " + num1 + " " + num2);
    var result = 0;
    if (method == "add") {
        result = num1 + " + "+num2 + " = " + (parseInt(num1) + parseInt(num2));
    } else if (method == "subtract") {
        result = num1 + " - " + num2 + " = " + (num1 - num2);
    } else if (method == "multiply") {
        result = num1 + " * " + num2 + " = " + (num1 * num2);
    } else if (method == "divide") {
        result = num1 + " / " + num2 + " = " + (num1 / num2);
    } else {
        result = "Please enter proper method";
    }
    console.log(result);
    res.render('index', { title: 'Express' });
});

module.exports = router;
