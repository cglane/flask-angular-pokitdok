var should = require('should');
var assert = require('assert');
var supertest = require('supertest');
var url = 'http://localhost:5000/'
var request = supertest(url)
var trading_partners = []
describe('Test API',function(){
it('Get Trading Partners',function(done){
  request.get('api/trading_partners')
  .end(function(err,res){
    if(err)throw err;
    trading_partners = res.body.data
    res.status.should.be.equal(200);
    done()
  })
})
it('Creates a Chart',function(done){
  request.post('api/create_chart')
  .send({'trading_partners':trading_partners,'fileName':'mygraph.png'})
  .end(function(err,res){
    if(err)throw err;
    res.status.should.be.equal(200)
    done()
  })
})
})
