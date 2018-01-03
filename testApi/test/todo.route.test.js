
let app = require('../app')

let chaiHttp = require('chai-http')
let chai = require('chai');
let expect = chai.expect;

chai.use(chaiHttp);

describe('The users "/users" route', () => {

// ensure that 'done' call back is included for mocha
// otherwise test will compile improperly

	it('Returns a response status of 200 ', (done) => {
		chai.request(app)
		 .get('/users')
		 .end((err, res) => {
		    expect(res.status,"*** test failure ***").to.eql(200);
		    done();
		 });
	})

	it('Has a body', (done) => {
		chai.request(app)
		 .get('/users')
		 .end((err, res) => {
		    expect(res.body,"*** test failure ***").to.be.a('string');
		    done();
		 });
	})



});


