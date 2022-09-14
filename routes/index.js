var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GROUP CODING PLATFORM' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'GROUP CODING PLATFORM' });
});

router.route('/contact')
.get(function(req, res, next)
{
res.render('contact', { title: 'GROUP CODING PLATFORM' });
})
.post(function(req, res, next)
{
  req.checkBody('name','Empty name').notEmpty();
  req.checkBody('email','Invalid mail').isEmail();
  req.checkBody('message','Empty message').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    res.render('contact',{
      title: 'GROUP CODING PLATFORM',
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      errorMessages: errors
    });
  }
  else{

    var mailOptions = {
      from: 'GROUP CODING PLATFORM <noreply@gcp.com>',
      to: 'loinking222@gmail.com',
      subject: 'You got a new message from visitor  👨‍💻',
      text: req.body.message 
    };

    transporter.sendMail(mailOptions,function(error,info){
      if(error){
        return console.log(error);
      }
      res.render('thank', { title: 'GROUP CODING PLATFORM' });
    });

  }
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login you acc' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register your acc' });
});


module.exports = router;