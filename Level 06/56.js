let arr = [1,2,3,4,5,6];
let count = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        console.log(arr[i]);
        count++;
    }
}
console.log( "Count : " , count);