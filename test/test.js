var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

var prefix = require('../');

describe('prefix', function() {
  it('should return multiple requested prefixes', function() {
    return prefix('rdf', 'foaf', 'owl').should.eventually.eql({
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      foaf: "http://xmlns.com/foaf/0.1/",
      owl: "http://www.w3.org/2002/07/owl#"
    });
  });

  it('should resolve an empty object given no prefixes', function() {
    return prefix().should.eventually.eql({});
  });
});
