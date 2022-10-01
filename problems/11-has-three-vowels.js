/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
let hasThreeVowels = function(string){
       let vowels = "AEIOUaeiou"
       let letter = string.split('')                       //['d', 'e', 'l', 'i', 'c', 'i', 'o', 'u', 's']
       letter = letter.filter(function(el,i){
        // console.log(el, i)
            return vowels.includes(el) && (letter.indexOf(el) === i)    //['e', 'i', 'i', 'o', 'u'] && (if the position of the el is not the same as the
        });                                                             //indexOf(which means first occurence).
        return letter.length >= 3
    }
console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
