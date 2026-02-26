function Search (arr,element){
    for(let i =0;i< arr.length;i++){
        if (arr[i]===element){
            return i;
        }
    }
    retuen -1;
}
let numbers = [5,6,39,2,45];
let result = Search(numbers,45);
console.log(result);