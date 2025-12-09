

let str = "Hello World";
let result = "";
// let ch = str;
for(let i=0; i<str.length; i++){
    if(str[i] >="a" && str[i] <= "z"){
        result += str[i].toUpperCase();
    } else if(str[i] >="A" && str[i] <= "Z"){
        result += str[i].toLowerCase();
    } else{
        result += str[i]
    }
}
console.log(result);