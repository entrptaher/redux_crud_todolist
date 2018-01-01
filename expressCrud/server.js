/*eslint no-console: "error"*/

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8000;
let todo = require('./controllers/routes/todo.route');
let config = require('config'); // load db locales from json files


// db connection
mongoose.connect(config.DBHost);
let db =  mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));


// do not show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
	// using morganto log at CLI
	app.use(morgan('combined'));// outputs Apached style logs
};

// ===========================

// allows express to access form values
app.use(bodyParser.urlencoded({extended: true}));
//  allow express to utilize json
app.use(bodyParser.json());


// =========================== CRUD operations for todo items

//  READ (Home)
app.get('/', (req, res, err) => {
	console.log("GET route")
	res.send("Got the home page")
	// res.sendFile(__dirname + '/index.html');
});

//  READ (Todos- index)
app.get('/todos', (req, res, err) => {
	// show all photos
	console.log("GET all todos route")
	/*db.collection('todos').find().toArray((err, results) => {
		console.log(results);
	});*/
});

// CREATE (Todos)
app.get('/todos/new', (req, res, err) => {
	// return form in view for creating a new task
});

app.post('/todos', (req, res) => {
	// create a new todo
	console.log("POST route ")
	/*db.collection('todos').save(req.body, (err, result) => {
		if(err) return console.log(err);
		console.log("Successfully saved to database");
		res.redirect('/');
	});*/
});

app.get('/todos/id', (req, res, err) => {
	// show one photo
	console.log("GET all todos route")
});


// UPDATE
// rewrite this with /id/edit in the route and use params
app.get('/todos/id/edit', (req, res) => { 
	// get a specific photo to edit and place in a form
});

app.put('/todos/id/', (req, res) => {
	// handle put request
	console.log('PUT request for Update');
	db.collections('todos')
	/*.findOneAndUpdate( query, update, options, callback)*/
	/*.findOneAndUpdate(
		{id:"include "}, ...etc
	)};*/
	res.send("PUT route")
});

// DELETE
app.delete('/todos/id', (req, res) => {
	// handle destroy request
	res.send("DELETE route")
});


// https://zellwk.com/blog/crud-express-and-mongodb-2/

