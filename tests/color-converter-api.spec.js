const request = require("request");
const assert = require("assert");

describe("Teste de api de conversao de cores", function() {
  it("Converte para hex", function(done) {
    request("http://localhost:9000/rgbToHex/255/0/0", function(error, response, body) {
      assert.equal(response.statusCode, 200);
      assert.equal(body, "#ff0000");
      done();
    });
  });

  it("Converte para rgb", function(done) {
    request("http://localhost:9000/rgbToRgb/ff0000", function(error, response, body) {
      assert.equal(response.statusCode, 200);
      assert.equal(body, "255, 0, 0");
      done();
    });
  });
});
