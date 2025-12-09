let arr = [45,69,67,33,106,104];
let min = arr[0];

for(let i=0; i< arr.length; i++){
    if(arr[i] <= min){
        min = arr[i];
    }
}
console.log(min);