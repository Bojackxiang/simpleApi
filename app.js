var express = require("express");
var app = express();
var mg = require('mongoose');
var bp = require('body-parser');
mg.connect('mongodb://127.0.0.1:27017/bookstore');
var db = mg.connection;
var books = require('./model/books.js');


app.get('/', function(req, res){
	res.send("Please go to the /api page");
});


app.get('/api', function(req, res){
	books.getbooks(function(error, books){
		if(error){console.log(error)}
		res.json(books);
	});
});


app.listen(8888, function(){
	console.log('Server is starting')
});