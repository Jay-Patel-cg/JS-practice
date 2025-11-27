//  LCM of Two Numbers (least common multiple). (લ.સા.અ.)

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));

let max = (a > b) ? a : b;
let lcm = max;

while (true) {
  if (lcm % a == 0 && lcm % b == 0) {
    break;   
  }
  lcm++;     
}

console.log("LCM = " + lcm);


//  Anubhav-sir Apporce

let f = 20;  
let s = 44;
 let largest = Math.max(f,s);

 for(let i = largest; i<=f*s; i++){
  if(i%f==0 && i%s==0){
    console.log(i);
    return;
  }
 }