var assert = chai.assert;
var sandbox;
var ls = {};
describe('EasterEgg', function(){
  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    stub = sandbox.stub(window.localStorage,'getItem',function(){return ls[easterEgg.NAME]});
    stub2 = sandbox.stub(window.localStorage,'setItem',function(data){ls[easterEgg.NAME] = data;});
    ls = {}
  });
  afterEach(function(){
    sandbox.restore();
  });
  describe('#enableEasterEgg()', function(){
    it('should return true when the easter egg is set', function(){
      stub2('true');
      assert.equal('true',stub());
    });

    it('should not return true when the easter egg is not set', function(){
      assert.notEqual('true',stub());
    });
  });

  describe('#disableEasterEgg()', function(){
    it('should return false when the easter egg is disabled', function(){
      stub2('false');
      assert.equal('false',stub());
    });

    it('should not return false when the easter egg is not disabled', function(){
      assert.notEqual('false',stub());
    });
  });

  describe('#shouldShowEasterEgg()', function(){
    it('should return a boolean', function(){
      assert.isBoolean(easterEgg.shouldShowEasterEgg());
    });
  })
});