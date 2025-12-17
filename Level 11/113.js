function sign(n) {
  return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
}
console.log(sign(5));
console.log(sign(-3));
console.log(sign(0));