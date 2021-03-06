/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const api = require('./routes/api');
const app = new express();

app.use(express.static(__dirname + '/dist/'), bodyParser.json());

app.use('/api', api);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , '/dist/index.html'));
});

app.listen(PORT, function() { 
    /*eslint-disable */
    console.log('Running on port: '+ PORT);
});
