var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');

var hbs = require('express-handlebars') //new

var app = express();

const crypto = require('crypto');

const generateRandomSecret = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

const secret = generateRandomSecret(32); // 32 bytes (256 bits) is a common length for a secret
console.log('Generated secret:', secret);


const express = require('express');
const session = require('express-session');

// Use the session middleware with the secret
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));

var fileUpload = require('express-fileupload') //new
var db = require('./config/connection') //new
var session = require('express-session') //new

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/', partialsDir: __dirname + '/views/partials/' })) //new

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload()) //new
// app.use(session({ secret: "key", cookie: { maxAge: 600000 } }))
app.use(session({
  // other options
}));


db.connect((err) => {
  if (err) console.log('Database Connection Error: ' + err);
  else console.log('Database Connected');
}) //new

app.use('/', userRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
