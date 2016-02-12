var code = require("../main.js");
var expect = require("chai").expect


describe('Taxes', function(){
  it('should tax the first $10 at 10%');
  it('should tax the second $10 at 7%');
  it('should tax the third $10 at 5%');
  it('should tax everything else at 3%');
});
