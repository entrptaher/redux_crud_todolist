/*eslint no-console: "error"*/

const express = require('express');
const app = express();

app.listen(3030, function() {
	console.log('server listening on 3030');
});

// CRUD operations

//  READ
app.get('/', (req, res, err) => {
	res.sendFile(__dirname + '/index.html');
});

// CREATE
app.post('/todos', (req, res, err) => {
	console.log("This is the POST route ");
	// res.send("Hitting the POST route");
});


