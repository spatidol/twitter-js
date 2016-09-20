// in some file that is in the root directory of our application
var nunjucks = require('nunjucks');

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
