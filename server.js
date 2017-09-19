var express = require('express');

var app = express();
	var PORT = process.env.PORT || 3000;
	
app.get('/', function(req, res){
	app.use(express.static(__dirname + '/pages'));
    res.sendFile('pages/index.html', {root: __dirname })
});

app.get('/about', function(req, res){
    res.sendFile('pages/rules.html', {root: __dirname })
});

app.listen(PORT, function(){
	console.log('Local server started at PORT: ' + PORT + '!');
});
