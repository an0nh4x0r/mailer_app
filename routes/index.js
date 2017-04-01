var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/', function (req, res) {
    var api_key = 'key-yourkey';
    var domain = 'yourdomain';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
        from: 'AmazeSpace <admin@theamaze.space>',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        if (!error){
            res.send('Message has been sent');
        } else {
            console.log(error)
        }
    });
});

module.exports = router;
