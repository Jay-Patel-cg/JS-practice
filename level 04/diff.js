// // let obj = {
// //     a: 1,
// //     e: 1,
// //     i: 1,
// //     o: 1,
// //     u: 1
// // };

// // let str = "Hello World";
// // let count = 0;

// // for (let i = 0; i < str.length; i++) {
// //     // let letter = str[i].toLowerCase();
// //     if (obj[str[i]] != 1) {
// //         count++;
// //         console.log(str[i]);
// //     }
// // }

// // console.log("Total Consonants:", count);


// let input = "Hello World";
// let count = 0;
// let str = input.toLowerCase();
// for(let i=0; i<str.length; i++){
//     let ascii = str.charCodeAt(i);
//     if((ascii>=65 && ascii<=90) || (ascii>=97 && ascii<=122)){
//         if((ascii==97) || (ascii==101) || (ascii==105) || (ascii==111) || (ascii==117)){
//             continue;
//         } else{
//             count++;
//             console.log(input[i]);
//         }
//     }
// }
// console.log("This are the Consonants(non Vowel) :  " +  count);


// let str = "Hello World";
// for(let i=0;i<str.length; i++){

// let ascii =str.charCodeAt(i);
// let char= String. fromCharCode(ascii);
// console.log(char);
// }

let str="Hello world";
let res="";
for(let i=0;i<str.length; i++){

let ascii =str.charCodeAt(i);

if(ascii>=97 && ascii <= 122){
ascii=ascii-32;



}
let char=String.fromCharCode(ascii);
res=res+char;
}

console.log(res);
































