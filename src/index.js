

// imports
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


mongoose.connect(config.db_connect);

const friendRoute = require('./routes/api/friendRoute');

app.use(friendRoute);

app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
