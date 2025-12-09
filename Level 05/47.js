// let str = "JavaScript";
// let count = 0;

// for(let i=0; i<=str.length;i++){
//     if(str[i]>="a" && str[i] <="z"){
//         count++;
//     }
// }
// console.log(count);



//  2nd Logic



let str = "JavaScript";
let count = 0;

for(let i=0; i<str.length;i++){
    let ascii=str.charCodeAt(i);
    if(ascii>=97 && ascii <=122){
        count++;
    }
}
console.log(count);