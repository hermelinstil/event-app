var express = require('express'),
    cli = require('cli-color'),
    port = process.env.PORT || 5000;

var app = express();


/* Load database */
var events = require('./config/mock_database.js');

/* Set static directory */
app.use(express.static(__dirname + '/public'));

/* Load routes */
require('./config/routes.js')(app, events);


/* Start the server */
app.listen(port, function() {
    console.log(cli.green('Listening to port ' + port + '...'));
});
