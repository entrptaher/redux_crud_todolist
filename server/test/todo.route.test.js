
let app = require('../app')

let chaiHttp = require('chai-http')
let chai = require('chai');
let expect = chai.expect;

chai.use(chaiHttp);

describe('The todos "/todos" route', () => {

	it('Returns a response status of 200', (done) => {
		chai.request(app)
		 .get('/todos')
		 .end((err, res) => {
		    expect(res.status,"*** test failure ***").to.eql(200);
		    done();
		 });
	})

	it('returns a string body', (done) => {
		chai.request(app)
		 .get('/todos')
		 .end((err, res) => {
		    expect(res.body,"*** test failure ***").to.be.a('string');
		    done();
		 });
	})

});


