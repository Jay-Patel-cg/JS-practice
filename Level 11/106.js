function isBetween(n) {
    if (n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isBetween(50));   
console.log(isBetween(1));    
console.log(isBetween(150));  