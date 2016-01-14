var express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if(app.get('env') == 'development'){
  app.use(require('connect-livereload')({
    port: 35742
  }));
}

app.locals.isDev = function () {
  return app.get('env') == 'development';
}

app.use(logger('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404.jade');
});

// error handlers
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
