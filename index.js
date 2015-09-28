module.exports = function() {
  return function(style) {
    style = this || style;
    style.import(__dirname + '/index.styl');
  }
}
