const assert = require("assert");
const colorConverter = require("../src/colorConverter");

describe("Testando conversor de cores", function() {
  describe("Conversao de rgb para hex", function() {
    it("Converte vermelho", function() {
      const colorRgb = [255, 0, 0];
      const colorHex = colorConverter.toHex(colorRgb);
      assert.equal(colorHex, "#ff0000");
    });

    it("Converte verde", function() {
      const colorRgb = [0, 255, 0];
      const colorHex = colorConverter.toHex(colorRgb);
      assert.equal(colorHex, "#00ff00");
    });

    it("Converte azul", function() {
      const colorRgb = [0, 0, 255];
      const colorHex = colorConverter.toHex(colorRgb);
      assert.equal(colorHex, "#0000ff");
    });
  });
});
