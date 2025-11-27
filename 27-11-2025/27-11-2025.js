function checkPrime(x){
    for(let i=2; i<=Math.floor(x/2);i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

function main(n){
    let res = [];
    for(let i=2; i<=n; i++){
        if(checkPrime(i)){
            res.push(i);
        }
    }
    console.log(res.join(" "));
}
main(20);