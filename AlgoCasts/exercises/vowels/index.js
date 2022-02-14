// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 方法1
// function vowels(str) {
//     let count = 0;
//     const vowArray = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < str.length; i++) {
//         if (vowArray.includes(str[i].toLowerCase())) {
//             count = count + 1;
//         }
//     }

//     return count;
// }

// 方法2
function vowels(str) {
  const matches =   str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
