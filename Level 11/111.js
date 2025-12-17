function longer(a, b) {
  return a.length >= b.length ? a : b;
}

console.log(longer("hi", "hello"));
console.log(longer("javascript", "js"));
console.log(longer("abc", "xyz"));