
var express = require('express');

var app = express();

var moment = require('moment');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

   var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  
  json.ipaddress=ip;
  json.language=request.headers["accept-language"].split(',')[0];
  json.software=request.headers['user-agent'].split(') ')[0].split(' (')[1];
  
 
  response.send(json);
  
});


 var json = {
    ipaddress: null,
    language: null,
    software:null
  };
  


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
