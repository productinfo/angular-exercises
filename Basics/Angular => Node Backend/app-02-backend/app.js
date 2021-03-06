var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index  = require('./routes/index');
var heroes = require('./routes/heroes');
var users  = require('./routes/users');

var app = express();


var cors = require('cors')

app.locals.pretty = true;  
// all environments
app.set('port', process.env.PORT || 8080);
// Set CORS http://stackoverflow.com/a/21622564
app.use(cors({credentials: true, origin: true}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/hero', heroes);
app.use('/heroes', heroes);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

/* ** ** ** ** ** ** **
* App Server Listening
* ** ** ** ** ** ** **/
app.listen(app.get('port'), app.get('ipaddress'), function() {  
      console.log("Node app is running at localhost:" + app.get('port'))
});