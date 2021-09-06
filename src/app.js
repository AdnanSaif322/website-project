const express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config({path: `${__dirname}/../.env`})


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
