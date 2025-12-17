// let arr = ["hi", "hello", "a"];

// let result = arr.map(s => s.length);

// console.log(result);






// let arr = ["JS", "is", "cool"];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i].length);
// }

// console.log(result); 






// let arr = ["hi", "hello", "a"];
// let result = [];

// arr.forEach(s => result.push(s.length));

// console.log(result);





// let arr = ["JS", "is", "cool"];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let ch of arr[i]) {
//         count++;
//     }
//     result.push(count);
// }

// console.log(result); 


function length(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

function main(arr) {
    let res = [];
    let i = 0;

    // loop without using arr.length
    while (arr[i] !== undefined) {
        res.push(length(arr[i]));
        i++;
    }

    console.log(res);
}

main(["Hello", "he", "the"]);