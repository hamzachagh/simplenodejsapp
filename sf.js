var nforce = require('nforce');

 var org = nforce.createConnection({
  clientId: '3MVG9Rd3qC6oMalXcM8hVxjOJvhYFvfY_wIr99DZ23Y_nlfVWpJsw1bRzL_eKt6E31PskZRiL5sgdbXsYA3s.',
  clientSecret: '8971956947311806869',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  apiVersion: 'v41.0',  // optional, defaults to current salesforce API version
  environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single', // optional, 'single' or 'multi' user mode, multi default
  autoRefresh: true
}); 

 //single-user mode
org.authenticate({ username: 'hamzachagh2@gmail.com', password: 'Hamza_SE2018'}, function(err, resp){
  if(!err) console.log('Successfully connected to Salesforce. Cached token: ' + org.oauth.access_token);
  if(err) console.log('Cannot connect to Salesforce: ' + err);
}); 
/*
var org = nforce.createConnection({
  clientId: '3MVG95NPsF2gwOiNLx3MoFuCQffRip3hPC7McxHmQkczbGnjSZCId1pI0oqVy28f1qI2F7ZKApJc7Padj9Cid',
  clientSecret: '1849414258188740820',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  apiVersion: 'v41.0',  // optional, defaults to current salesforce API version
  environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single', // optional, 'single' or 'multi' user mode, multi default
  autoRefresh: true
});

org.authenticate({ username: 'hamzachagh@ea.com', password: 'HamzaSF2019'}, function(err, resp){
  if(!err) console.log('Successfully connected to Salesforce. Cached token: ' + org.oauth.access_token);
  if(err) console.log('Cannot connect to Salesforce: ' + err);
});
*/

module.exports = org;