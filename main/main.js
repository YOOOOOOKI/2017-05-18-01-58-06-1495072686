module.exports = function main(a) {
  // Write your cade here
  var b=parseInt(a);
  var sum=parseInt(b/100)+parseInt(b%100/10)+b%100%10;
  return sum;
};
