var code = require("../main.js");
var expect = require("chai").expect


describe('Taxes', function(){
  it('should not tax a negative sale', function(){
    expect(code.taxes(-1)).to.equal(0);
  });
  it('should tax the first $10 at 10%', function(){
    expect(code.taxes(1)).to.equal(0.1);
    expect(code.taxes(10)).to.equal(1);
  });
  it('should tax the second $10 at 7%', function(){
    expect(code.taxes(11)).to.equal((10 * 0.1) + (1 * 0.07))
    expect(code.taxes(20)).to.equal((10 * 0.1) + (10 * 0.07))
  });
  it('should tax the third $10 at 5%', function(){
    expect(code.taxes(21)).to.equal((10 * 0.1) + (10 * 0.07) + (1 * 0.05));
    expect(code.taxes(30)).to.equal((10 * 0.1) + (10 * 0.07) + (10 * 0.05));
  });
  it('should tax everything else at 3%', function(){
    expect(code.taxes(31)).to.equal((10 * 0.1) + (10 * 0.07) + (10 * 0.05) + (1 * 0.03));
    expect(code.taxes(40)).to.equal((10 * 0.1) + (10 * 0.07) + (10 * 0.05) + (10 * 0.03));
    expect(code.taxes(80)).to.equal((10 * 0.1) + (10 * 0.07) + (10 * 0.05) + (50 * 0.03));
    expect(code.taxes(1000)).to.equal((10 * 0.1) + (10 * 0.07) + (10 * 0.05) + (970 * 0.03));
  });
});
