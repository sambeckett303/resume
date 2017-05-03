var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8888,
    app = express();

// Configure Express
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.set('port', port);

app.get('/*', function (req, res) {
    res.render('index.html');
});

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});