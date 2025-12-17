let arr = ["hi", "hello", "hey There"];
let longest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}

console.log(longest); 
