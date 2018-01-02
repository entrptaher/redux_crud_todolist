/*eslint no-console: "error"*/

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let todos = require('./controllers/routes/todo.route');
// let config = require('config'); // load db locales from json files
const Port = 8000;

// db connection
mongoose.connect('mongodb://react-test:services2015@ds135537.mlab.com:35537/react-redux-todo', 
{
});


let db =  mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  // we're connected!
});




app.use(morgan('combined'));// outputs Apached style logs

// do not show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
// 	// using morganto log at CLI
// 	app.use(morgan('combined'));// outputs Apached style logs
// };

// =========================== Parsing

//  allow express to utilize json
app.use(bodyParser.json());
// allows express to access form values
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// =========================== CRUD operations for todo items

app.get('/', (req, res) => {
	// get the home page
	console.log("Welcome to the Todo API")
	// res.json({ message: "Welcome to the Todo API"})
});

app.route('/todos')
	.get(todos.getTodos) // show all todo 
	// .post(todos.postTodo); // create a new todo 

// app.route('/todos/:id')
// 	.get(todos.getTodo) // show a specific todo item
// 	.post(todos.updateTodo) // update a specific todo item
	// .delete(todos.deleteTodo); // destroys a specific todo item

// app.route('/todos/:id/edit')
// 	.get(todos.getTodoEditForm) // get form for pre pop with todo

// app.route('/todos/:id/new')
// 	.get(todos.getTodoNewForm) // get form for a new todo
	

// =========================== Deploy the server

app.listen(Port);

console.log('Listening on port ' + Port);

module.exports = app; // for testing

// tutorials for reference (basic)
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
// https://zellwk.com/blog/crud-express-and-mongodb-2/

