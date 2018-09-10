module.exports = {
  toHex(rgb) {
    let red = rgb[0].toString(16);
    let green = rgb[1].toString(16);
    let blue = rgb[2].toString(16);

    if (red.length == 1) red = 0 + red;
    if (green.length == 1) green = 0 + green;
    if (blue.length == 1) blue = 0 + blue;

    return `#` + red + green + blue;
  },
  toRgb(hex) {
    if (hex.startsWith("#")) hex = hex.substring(1, hex.length);

    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return [red, green, blue];
  }
};
