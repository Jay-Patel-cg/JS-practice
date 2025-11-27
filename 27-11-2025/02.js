// Q28 -> febonacci


// let n = 10;
// let res = [];
// for(let i=1; i<=n; i++){
//     if(i==1){
//         res.push(0);
//         continue;
//     }
//     if(i==2){
//         res.push(1);
//         continue;
//     }
//     res.push(res[i-3]+res[i-2]);
// }
// console.log(res);



//  feboncci in normal not array form



let n = 10;
let res = [];
let prev=0;
let SecondPrev = 1;
for(let i=1; i<=n; i++){
    if(i==1){
        console.log(0);
        continue;
    }
    if(i==2){
        console.log(1);
        continue;
    }
    console.log(prev+SecondPrev);
    let check = prev + SecondPrev
    prev = SecondPrev;
    SecondPrev=check;
}
// console.log(res);



// febonacci With recursion 


let a = 0;
let b = 1;





