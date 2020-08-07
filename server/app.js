const createError = require('http-errors');
const express = require('express');
const session = require("express-session");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
const passport = require("./passport/setup");
const auth = require("./routes/auth");

var app = express();
const MONGO_URI = "mongodb://127.0.0.1:27017/tutorial_social_login";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Bodyparser middleware, extended false does not allow nested payloads
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(
  session({
      secret: "very secret this is",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/api/auth', auth);

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
