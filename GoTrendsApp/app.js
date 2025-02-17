var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateCrendetialsRouter = require("./routes/validateUserCredentials");
var getProductDetailsRouter = require('./routes/getProductDetails');
var signupRouter = require("./routes/newUserSignup");
var getEmpDataRouter = require("./routes/employeeData");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/userAccountDetails', validateCrendetialsRouter);
app.use("/get/productDetails", getProductDetailsRouter);
app.use("/add/new/User", signupRouter);
app.use("/get/employee/Details", getEmpDataRouter);

app.listen(8081, () => {
  console.log("Server is listing at 8081");
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
