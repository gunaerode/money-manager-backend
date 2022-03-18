const express = require('express');
require('dotenv').config();
const dbconnection = require('../config/dbconnection');
const userRouter = require('./routes/users.router');
const { errorHandler, _404 } = require('./middlewares/error.middleware');

const app = express();
dbconnection();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// user router
app.use('/api/users', userRouter);

// Error middlewares
// errorHandler middleware should be last route as mentioned in the express check read me reference section
app.use(_404);
app.use(errorHandler);

module.exports = app;
