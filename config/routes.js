module.exports = function(app, events) {
    
    app.get('/fetch-events', function(req, res) {
        res.json(events);
    });

    app.get('/', function(req, res) {
        res.sendFile('./public/index.html');
    });

    /* Add catch-routes; 404, 500 */
    
};