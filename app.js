'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('./'));

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http',host,port);
});

var Firebase = require('firebase');
var dataRef = new Firebase('hhttps://amigotradingcorp.firebaseio.com/');
// dataRef.set({name: 'syed', text: 'hussain'});

app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'sql1'
// });
// var app = express();

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... \n\n");  
// } else {
//     console.log("Error connecting database ... \n\n");  
// }
// });

// app.get("/",function(req,res){
// connection.query('SELECT * from Persons', function(err, rows, fields) {
// connection.end();
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
//   });
// });