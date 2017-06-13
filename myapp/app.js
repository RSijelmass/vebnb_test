const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

addresses = [];

app.get('/', function(req, res) {
	res.render('index', {title: 'VeBnB'});
});

app.post('/spaces/new', function(req, res) {
	var address = req.body.address;
	addresses.push(address);	
	res.redirect('/spaces');
});

app.get('/spaces', function(req, res) {
	res.render('spaces', {addresses: addresses});
});

app.listen(3000, function() {
	console.log('3000 is running!')
});
