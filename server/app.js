const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config({ path: path.join(__dirname, 'config/.env') });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const dbConnector = require('./models/connector');

dbConnector.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
