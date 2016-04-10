var expect = chai.expect

describe("PRUEBAS CSV", function () {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("Pruebas para la función calculate()", function() {
    it("Cadena con elementos entrecomillados", function() {
      var input = '"Esto", "son", "elementos", "entrecomillados"';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Esto");
      expect(fun_cal[0].value[1]).to.equal("son");
      expect(fun_cal[0].value[2]).to.equal("elementos");
      expect(fun_cal[0].value[3]).to.equal("entrecomillados");
    });
  });
});