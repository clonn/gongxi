var should = require('chai').should();
var gongxi = require("../index");
var cli = require("../bin/gongxi");
var child_process = require("child_process");

describe("gongxi main for test", function(done) {
  it("test for faCai function", function(done) {
    result = gongxi.faCai();
    result.should.be.a("string");
    result.should.be.equal("新年快樂");
    done();
  });
});

describe.only("gongxi cli test ", function(done) {
  it("test for faCai cli", function(done) {
    var command = 'bin/gongxi faCai';
    child_process.exec(command, function(err, stdout, stderr) {
      if (err) return done(err);

      stdout.should.be.a("string");
      stdout.should.be.equal("新年快樂\n");
      done();
    });
  });
});
