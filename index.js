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

  
  
  

  app.get('/lead', function(req, res , next) {

    org.query({ query: "SELECT Id, name FROM Lead limit 1" })
      .then(function(results){
        console.log('test results --------------- '+results.records);
        res.render('pages/lead', { records: results.records });
      });
  
  });

/*
app.get('/lead', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/lead', {
        drinks: drinks,
        tagline: tagline
    });
});*/

  app.listen(PORT, () => console.log('Listening on ${ PORT }'))