const express = require('express');
const pages = require('./routes/pages');
const app = express();
const path = require('path');

app.use(express.static("dist"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
app.use('/', pages)

module.exports = app;