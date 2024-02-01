// Write a function that takes a string and returns true/false based on whether it is a palindrome or no
// t (you can use a dictionary to know what a palyndrom is).

function isPalindrome(str) {
    let reversedStr = "";
    let newStr = str.toLowerCase();
   if (newStr.length === 0 || str === "") {
     "This is an empty string, it cannot work";
    }
   for (let i = newStr.length - 1; i >= 0; --i) {
        reversedStr += newStr[i];
    }
   return newStr === reversedStr;
}
let testCase = "AmiParadis";
let testCase1 = "eeee";
let testCase3 = " AAA BBB EEE";
console.log(isPalindrome(testCase)); 
console.log(isPalindrome(testCase1)); 
console.log(isPalindrome(testCase3)); 
