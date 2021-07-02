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

function sum_nums(max){
    let sum = 0;

    for(let i = 1; i <= max; i++){
        sum += i;
    }

    return sum;
}

function factorial(num){
    let product = 1;
    
    for(let i = 1; i <= num; i++){
        product *= i;
    }

    return product;
}

function reverse(word){
    let word1 = word.split("");
    console.log(word1);
    word1.reverse();
    console.log(word1);
    let ans = word1.join("");
    console.log(word1);
    return ans;
}

function goodbye(name){
    return "Goodbye, " + name + ".";
}

let number = 11;
let string = "Athaliyah";
let firstName = "Nothemba";


console.log(count_a(string));
console.log(count_vowels(string));
console.log(sum_nums(number));
console.log(factorial(number));
console.log(reverse(string));
console.log(goodbye(firstName));
