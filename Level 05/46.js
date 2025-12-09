// let str = "JavaScript";
// let count = 0;

// for(let i=0; i<=str.length;i++){
//     if(str[i]>="A" && str[i] <="Z"){
//         count++;
//     }
// }
// console.log(count);


//  2nd Method

let str = "JavaScript";
let count = 0;

for(let i=0; i<str.length;i++){
    let ascii=str.charCodeAt(i);
    if(ascii>=65 && ascii <=90){
        count++;
    }
}
console.log(count);