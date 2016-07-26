var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//dichiarazione d'uso di http
var http = require('http');


//routes dichiarati
var routes = require('./routes/index');
var users = require('./routes/users');
var meteo = require('./routes/meteo');
var location = require('./routes/location');
var modelli = require('./routes/modelli');
var brain = require('./routes/brain');

//init dell'appalication express
var app = express();

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

//dichiarazione di uso dei routes
app.use('/', routes);
app.use('/users', users);
app.use('/meteo',meteo);
app.use('/modelli',modelli);
app.use('/location',location);

app.use('/brain', brain)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers testing 

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 3000); 
//create the server  
http.createServer(app).listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + app.get('port')); 
});


module.exports = app;