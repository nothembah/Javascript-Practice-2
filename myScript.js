function count_a(word){
    let myRegex = /a/gi;
    let result = word.match(myRegex).length;
    return result;
}

function count_vowels(word){
    let vowelRegex = /a|e|i|o|u/gi;
    let answer = word.match(vowelRegex).length;
    return answer;
}

console.log(count_a("aa i aA"));
console.log(count_vowels("NothEmba"));