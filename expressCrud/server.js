/*eslint no-console: "error"*/


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// allows express to access form values
app.use(bodyParser.urlencoded({extended: true}));
//  allow express to utilize json
app.use(bodyParser.json());

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

// =========================== CRUD operations for todo items


//  READ (Home)
app.get('/', (req, res, err) => {
	console.log("GET route")
	res.sendFile(__dirname + '/index.html');
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


module.export = app


// https://zellwk.com/blog/crud-express-and-mongodb-2/

/*  UPDATE
 app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
}) 
*/
