/*eslint no-console: "error"*/

const express = require('express');
const app = express();

// allows express to access form values
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// connect mongo db
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://react-todo:services2015@ds135537.mlab.com:35537/react-redux-todo', (err, database) => {

	if(err) return console.log(err);

	db = database.db('react-redux-todo');

	// ... start the server
	app.listen(3030, () => {
		console.log('server listening on 3030');
	});
});

// CRUD operations for todo items

//  READ
app.get('/', (req, res, err) => {
	res.sendFile(__dirname + '/index.html');
});

// CREATE
app.post('/todos', (req, res) => {
	db.collection('todos').save(req.body, (err, result) => {
		if(err) return console.log(err);
		console.log("Successfully saved to database");
		res.redirect('/');
	});
});


