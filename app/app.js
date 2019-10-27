var express = require('express');
var reload = require('reload');
var app = express();
var data = require('./data/people.json');
var gallery = require('./data/gallery.json');
app.set('port', process.env.PORT || 3300);
app.use(express.static('app/public'));
app.set('data', data);
app.set('gallery', gallery);
app.use(require('./routes/index'));
app.use(require('./routes/people'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.locals.siteTitle = "Cats";


var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));

});

reload(server, app);