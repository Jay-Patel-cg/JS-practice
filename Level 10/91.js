let arr = [1, 2, 3, 4, 1, 3, 5, 4, 3, 2, 3, 7];

let obj = {};

for (let n of arr) {
    if (obj[n] === undefined) {
        obj[n] = 1;
    } else {
        obj[n]++;
    }
}

console.log(obj);
