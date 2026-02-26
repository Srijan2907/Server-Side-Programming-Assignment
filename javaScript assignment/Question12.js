function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/abc/));           // true
console.log(isRegExp(new RegExp("a"))); // true
console.log(isRegExp("abc"));           // false
console.log(isRegExp(123));             // false