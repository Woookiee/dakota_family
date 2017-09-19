var express = require('express');

var app = express();
	var PORT = process.env.PORT || 3000;
	
app.use(express.static(__dirname + '/pages'));

app.get('/', function(req, res){
    res.sendFile('pages/index.html', {root: __dirname })
});

app.get('/rules', function(req, res){
    res.sendFile('C:/Users/Daler/Desktop/Azure/NodeProjects/Dakota/pages/rules.html', {root: __dirname })
});

app.listen(PORT, function(){
	console.log('Local server started at PORT: ' + PORT + '!');
});
