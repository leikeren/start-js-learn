// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 方法1
// function palindrome(str) {
//    return  str === Array.from(str).reverse().join('')
// }

// 方法2 字符串除2得出长度进行比对
// function palindrome(str) {
//     // 首先除于2，去除商
//     const quotient = Math.floor(str.length / 2) // 商数
//     let count = 0;
//     for(i=0; i < quotient; i++) {
//         if(str[i] !== str[str.length -1 -i]) {
//             return false
//         }
//     }
//     return true
// }

// 方法3使用 ES6 Array.every() 方法
function palindrome(str) {
    return str.split('').every((char, i)=> char === str[str.length - i -1])
}


module.exports = palindrome;
