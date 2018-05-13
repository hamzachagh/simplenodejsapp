const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const org = require('./sf.js');

var app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.get('/welcome', (req, res) => res.render('pages/welcome',{user:"Hamza CHAGH"}))

  
  
  

  router.get('/lead', function(req, res , next) {

    org.query({ query: "SELECT Id, name FROM Lead limit 1" })
      .then(function(results){
        res.render('pages/index');
      });
  
  });


  app.listen(PORT, () => console.log('Listening on ${ PORT }'))