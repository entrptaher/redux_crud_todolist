import axios from 'axios';
import chai from 'chai';

let expect = chai.expect;



describe('The initialRequest actions', () => {

	let todos 
	let task

	beforeEach((done) => {
		axios.get('http://localhost:3003/api/todos')
			.then((res) => {
				todos = res.data;
				task = todos[0]
				done()
			});
	});

	it('..returns an array of objects', () => {
		expect(todos).to.be.an('array');
		expect(task).to.be.an('object');
		expect(todos.length).to.be.above(0);
	})

	it('..has todo item as an object', () => {
		console.log(task)
	})

	it

})