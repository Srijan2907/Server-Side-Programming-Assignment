function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(10));       
console.log(isNumber(3.14));     
console.log(isNumber("10"));     
console.log(isNumber(NaN));      
console.log(isNumber("hello"));  