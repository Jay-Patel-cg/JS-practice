let str = "Hello 123 W 45 21 2 or 78 85 ld";
let result = "";

for(let i=0 ;i <str.length; i++){
    if(str[i]>="0" && str[i]<= "9"){
        continue;
    } else{
        result += str[i];
    }
}

console.log(result);