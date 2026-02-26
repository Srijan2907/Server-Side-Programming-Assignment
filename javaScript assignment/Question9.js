function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

let numbers = [1, 23, 3, 13, 8];

console.log(isSorted(numbers));