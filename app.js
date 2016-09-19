var express = require( 'express' );
var app = express(); // creates an instance of an express application

var nunjucks = require('nunjucks');

var volleyball = require('volleyball');

app.use(volleyball);


app.listen(3000, function() {
  console.log("server listening")
});



// app.use(function(request, response, next) {
//   console.log(request.method, request.originalUrl);
//   next();
// })

// app.use("/news", function(request, response, next) {
//   console.log("You've reached special area");
//   next();
// })

app.get("/", function(request, response, next) {
  response.send("Hello Welcome");
});

app.get("/news", function(request, response, next) {
  response.send("Hello from news");
})
