// let str = " Hello Aa World ";
// let output = str.replaceAll("a","e").replaceAll("A","E");
// console.log(output);




let str = "Banana A";
let res = "";

for(let i=0; i<str.length;i++){
    if(str[i]=="a" ){
        res += "e"
    } else if(str[i]=="A"){
        res += "E";
    } else{
        res += str[i];
    }
}
console.log(res);