function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/abc/));           
console.log(isRegExp(new RegExp("a"))); 
console.log(isRegExp("abc"));           
console.log(isRegExp(123));             