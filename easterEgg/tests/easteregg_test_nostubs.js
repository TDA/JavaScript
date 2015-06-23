var assert = chai.assert;
describe('EasterEgg', function(){
  beforeEach(function(){
    localStorage.clear();
  });

  describe('#enableEasterEgg()', function(){
    it('should return true when the easter egg is set', function(){
      easterEgg.enableEasterEgg();
      assert.equal('true',window.localStorage.getItem(easterEgg.NAME));
    });

    it('should not return true when the easter egg is not set', function(){
      assert.notEqual('true',window.localStorage.getItem(easterEgg.NAME));
    });
  });

  describe('#disableEasterEgg()', function(){
    it('should return false when the easter egg is disabled', function(){
      easterEgg.disableEasterEgg();
      assert.equal('false',window.localStorage.getItem(easterEgg.NAME));
    });

    it('should not return false when the easter egg is not disabled', function(){
      assert.notEqual('false',window.localStorage.getItem(easterEgg.NAME));
    });
  });

  describe('#shouldShowEasterEgg()', function(){
    it('should return a boolean', function(){
      assert.isBoolean(easterEgg.shouldShowEasterEgg());
    });
  })
});