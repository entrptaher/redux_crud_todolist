
let app = require('../app')

let chaiHttp = require('chai-http')
let chai = require('chai');
let expect = chai.expect;

chai.use(chaiHttp);

describe.only('The todos "/todos" route', () => {

	let http;

	beforeEach(() => {
		http = chai.request(app).get('/todos')
	});

	after(() => {
		http = '';
	});

	it('Returns a response status of 200', (done) => {
		 http.end((err, res) => {
		    expect(res.status,"*** test failure ***").to.eql(200);
		    done();
		 });
	})

	it('returns a string body', (done) => {
		 http.end((err, res) => {
		    expect(res.body,"*** test failure ***").to.be.a('string');
		    done();
		 });
	})

});


