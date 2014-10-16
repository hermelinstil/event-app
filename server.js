var express = require('express'),
    cli = require('cli-color');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000))

var events = require('./mock_database.js');

/* 
Add routes for:
    -getting all events
    -add 'coming-to' for event
    -add new event
    -remove event(?)
*/

app.get('/fetch-events', function(req, res) {
    res.json(events);
})

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

/* Add catch-routes; 404, 500 */

app.listen(app.get('port'), function() {
    console.log(cli.green('Listening to port ' + app.get('port') + '...'));
});
