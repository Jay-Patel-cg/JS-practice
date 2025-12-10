let arr = [1,2,2,3,4,4,5,4,6,3,4,6,3,4,5,3,45];
let value = 3;
let count = 0;


for(let i=0; i<arr.length; i++){
    if(arr[i] == value){
        count++;
    }
}
console.log(count);