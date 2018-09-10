module.exports = {
  toHex: function(rgb) {
    let red = rgb[0].toString(16);
    let green = rgb[1].toString(16);
    let blue = rgb[2].toString(16);

    if (red.length == 1) red = 0 + red;
    if (green.length == 1) green = 0 + green;
    if (blue.length == 1) blue = 0 + blue;

    return `#` + red + green + blue;
  }
};
