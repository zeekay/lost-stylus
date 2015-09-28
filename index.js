module.exports = function() {
  console.log('erp')
  return function(style) {
    style = this || style;
    console.log('erp', style);
    style.import(__dirname + '/index.styl');
  }
}
