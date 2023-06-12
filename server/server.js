"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
app.use(express.json());
app.post('/', function (req, res) {
    try {
        console.log(req.body);
        var responseData = { message: 'Request received successfully' };
        res.status(200).json(responseData);
    }
    catch (error) {
        var err = error; // Type assertion to specify the type of 'error'
        res.status(500).json({ error: err.message });
    }
});
app.listen(6000, function () {
    console.log('Server is running on port 6000');
});
