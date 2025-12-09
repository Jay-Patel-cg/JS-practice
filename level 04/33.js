//  Count Vowels

// let str = prompt("Enter a string: ");

// let count = 0;
// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     count++;
//   }
// }

// console.log("Total vowels =", count);


// Anubhav-sir Approce

let str="JAVASCRIPT";
let str2=str.toLowerCase();

let obj={
a:1,
e:1,
o:1,
i:1,
u:1
}

let count=0
for(let char of str2){
if(obj[char] == 1){
count++
}
}
console.log(count);
console. log(count);