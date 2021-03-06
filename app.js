var express = require( 'express' );
var app = express(); // creates an instance of an express application

var nunjucks = require('nunjucks');

var volleyball = require('volleyball');

var socketio = require('socket.io');

app.use(volleyball);

var routes = require('./routes/');



var server = app.listen(3000, function() {
  console.log("server listening")
});

var io = socketio.listen(server);
app.use( '/', routes(io) );

// app.use("/", function(req, res, next) {
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });


nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

