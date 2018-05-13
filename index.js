const express = require('express')
const path = require('path')
/*const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log('Listening on ${ PORT }'))
  */







res.render( 'index', {
  title: 'Unauthenticated',
  errorMessage: 'This app may only be loaded via Salesforce Marketing Cloud',
})


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('pages/index'))
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});