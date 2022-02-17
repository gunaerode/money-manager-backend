const express = require('express');
require('dotenv').config();
const dbconnection = require('../config/dbconnection');
const userRouter = require('./routes/user.router');

const app = express();
dbconnection();

// user router
app.use('/', userRouter);

module.exports = app;
