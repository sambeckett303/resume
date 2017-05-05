const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    smtpTransport = require("nodemailer-smtp-transport"),
    email = process.env.EMAILADDR,
    emailPassword = process.env.EMAILPSW,
    port = process.env.PORT || 8888,
    app = express();

let transport = nodemailer.createTransport(smtpTransport({
    service : "gmail",
    secureConnection : false,
    //port: 587,
    auth : {
        user : email,
        pass : emailPassword
    }
}));

// Configure Express
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.set('port', port);

app.get('/sendemail', function (req, res) {
    let mailOptions = {
        to: 'sambeckett303@gmail.com',
        subject: 'Message from ' + req.query.name + ' (' + req.query.email + ')',
        text: req.query.comments
    };
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.sendStatus(200);
    }); 
});

app.get('/*', function (req, res) {
    res.render('index.html');
});

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});