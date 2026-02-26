function sortString(str) {

    return str
        .split("")     
        .sort()        
        .join("");     
    }

let result = sortString("IET DAVV COLLEGE");

console.log(result);