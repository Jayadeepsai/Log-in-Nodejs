const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const cors = require('cors')

const apicall = require('./routes')


mongoose.connect('');
mongoose.Promise = global.Promise;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())



app.use('/signupandlogin', apicall);


module.exports = app;