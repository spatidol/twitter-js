var express = require( 'express' );
var app = express(); // creates an instance of an express application

var nunjucks = require('nunjucks');

var volleyball = require('volleyball');

app.use(volleyball);


app.listen(3000, function() {
  console.log("server listening")
});


// app.use(function(req, res, next) {
//   console.log(req.method, req.originalUrl);
//   next();
// }

// app.use("/news", function(req, res, next) {
//   console.log("You've reached special area");
//   next();
// })

app.get("/", function(req, res, next) {
  res.send("Hello Welcome");
});

app.get("/news", function(req, res, next) {
  res.send("Hello from news");
})


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals,  function (err, output) {
  if (err) throw Error();
    console.log(output);
});


nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
res.render( 'index', {title: 'Hall of Fame', people: people} );
