// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 方法1
// function reverse(str) {
//   return  Array.from(str).reverse().join('')
// }

// 方法2
// function reverse(str) {
//     let reversed = ''
//     for(let char of str) {
//         reversed = char + reversed 
//     }
//     return reversed
// }

// 方法3 
// function reverse(str) {
//     return str.split('').reduce((reversed, character)=> character + reversed, '')
// }

// 方法4
function reverse(str) {
    let tempArray = str.split('');
    let reversedArray = [];
    for(i= tempArray.length; i--; i > 0) {
        reversedArray.push(tempArray[i]);
    }
    return reversedArray.join('') 
}

module.exports = reverse;
