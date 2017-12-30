const express = require('express');
const app = express();

app.listen(3030, function() {
	console.log('server listening on 3030');
});

// CRUD operations

app.get('/', (req,res) => {
	res.send('The GET path for READ...')
});