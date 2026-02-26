function findAllIndexes(str,word){
    let index = str.indexOf(word);
    while (index !== -1){
        console.log(index)
        index = str.indexOf(word, index +1);
    }
}
findAllIndexes("hello world hello","hello");