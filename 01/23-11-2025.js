
// Level 2 – Loops and basic calculations







//    Inpute Work only in Online Compiler




//  Q11  Print 1 to 10

// for(let i=1; i<=10; i++){
//     console.log(i);
// }




// Q12 Print 1 to N

// const input = parseInt(prompt("Give N : "));

// for(let i=1; i<=input; i++){
//     console.log(i);
// }   // Run on Online Compiler...







//  Q13 Even Numbers 1 to N

// const input = parseInt(prompt("Give N : "));

// for(let i=1; i<=input; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }   // Run on Online Compiler...





//  Q14 Odd Numbers 1 to N

// const input = parseInt(prompt("Give N : "));

// for(let i=1; i<=input; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }   // Run on Online Compiler...






// Q15 Sum 1 to N

// const input = parseInt(prompt("Give N : "));
// let sum = 0;

// for(let i=1; i<=input; i++){
//     sum = sum + i;
// }
// console.log(sum);





// Q16 Product 1 to N (Factorial)

// const input = parseInt(prompt("Give N : "));
// let multi = 1;

// for(let i=1; i<=input; i++){
//     multi = multi*i;
// }
// console.log(multi);




// Q17 Multiplication Table of a Number

// const input = parseInt(prompt("Give N : "));

// for(let i=1; i<=10; i++){
//     console.log( input * i);
// }






// Q18 Count Numbers Divisible by 3 (1 to N)


// const input = parseInt(prompt("Give N : "));
// let count = 0;

// for(let i=1; i<=input; i++){
//     if(i%3==0){
//         // console.log(i);
//         count++;
//     }
// }
// console.log(count);





// Q19 Factorial (Iterative)

// const input = parseInt(prompt("Give N : "));
// let multi = 1;

// for(let i=1; i<=input; i++){
//     multi = multi*i;
// }
// console.log(multi);





// Q20  First N Multiples of 7

// const input = parseInt(prompt("Give N : "));


// for(let i=1; i<=input; i++){
//     console.log(i*7);
// }





//  ROW


function first(){
    let str="";
    for(var i=1;i<=10;i++){
        str=str+i+" ";
    }
    console.log(str);
}
first()