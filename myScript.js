function count_a(word){
    let myRegex = /a/gi;
    let result = word.match(myRegex).length;
    return result;
}

console.log(count_a("aa i aA"));