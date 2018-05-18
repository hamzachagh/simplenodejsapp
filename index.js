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

  org.query({ query: "SELECT Id, name FROM Lead limit 100" })
    .then(function(results){

    // parse json f
		var jsonParsed  = JSON.parse(JSON.stringify(results.records));
		// access elements
    //console.log("s office phone number is " + jsonParsed[0].name);
    //console.log('test results --------------- '+JSON.stringify(results.records));
      res.render('pages/lead', { leads:jsonParsed });
    }); 
    
});

app.listen(PORT, () => console.log('Listening on ${ PORT }'))