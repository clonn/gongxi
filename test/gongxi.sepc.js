var should = require('chai').should();
var gongxi = require("../index");

describe("gongxi cli test for first test", function(done) {
  it("test for faCai function", function(done) {
    result = gongxi.faCai();
    result.should.be.a("string");
    result.should.be.equal("新年快樂");
    done();
  });
});