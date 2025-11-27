// GCD of Two Numbers (Simple Loop) (greatest common divisor). ( ગુ. સા. અ.)

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));

let gcd = 1;

for (let i = 1; i <= a && i <= b; i++) {
  if (a % i == 0 && b % i == 0) {
    gcd = i;
  }
}

console.log("GCD = " + gcd);



//  anubhav-Sir approce 

let f = 33;
let s = 11;

let smallest = Math.min(f,s);

for(let i=smallest;i>=1;i--){
    if((f%i==0) && (s%i==0)){
        console.log(i);
        return;
    }
}