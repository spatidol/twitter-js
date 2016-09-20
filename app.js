var express = require( 'express' );
var app = express(); // creates an instance of an express application

var nunjucks = require('nunjucks');

var volleyball = require('volleyball');

app.use(volleyball);

var routes = require('./routes/');
app.use('/', routes);


app.listen(3000, function() {
  console.log("server listening")
});



// app.use("/", function(req, res, next) {
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });


nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

