

// imports
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const favicon = require('serve-favicon');
const logger = require('morgan');
var bodyParser = require('body-parser');
const app = express();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(config.db_connect);

const friendRoute = require('./routes/api/addFriendRoute');
const getFriendsRoute = require('./routes/api/getFriendsRoute');
const updateFriendRoute = require('./routes/api/updateFriendRoute');
const indexRoute = require('./routes/visitor/index');

app.use(friendRoute);
app.use(getFriendsRoute);
app.use(updateFriendRoute);
app.use(indexRoute);


app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
