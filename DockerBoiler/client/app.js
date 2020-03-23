var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// if(process.env.NODE_ENV === 'production') {
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }
module.exports = app;
