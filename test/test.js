process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'http://localhost:3000/';
let should = chai.should();

chai.use(chaiHttp);

describe('/ GET', () => {
    it('it should respond status 200 and no error', (done) => {
      chai.request(server)
          .get('')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});


describe('/list GET', () => {
    it('it should respond default list size 2', (done) => {
      chai.request(server)
          .get('list')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(2);
            done();
          });
    });
});


describe('/add POST', () => {
    it('it should respond status 200 and no error and new item added', (done) => {
      chai.request(server)
          .post('add')
          .type('form')
          .send({
            'info': 'New item',
          })
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});

describe('/list GET', () => {
    it('it should respond default list size 2 + new extra item', (done) => {
      chai.request(server)
          .get('list')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(3);
            done();
          });
    });
});