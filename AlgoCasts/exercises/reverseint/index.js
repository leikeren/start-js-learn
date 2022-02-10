// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
//    return Math.abs(n) === n ?  Number(String(Math.abs (n)).split('').reverse().join('')) : -Number(String(Math.abs (n)).split('').reverse().join(''))
/*
 * @Description: 
 * Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零。 
 * 此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN。
 * @作者: wang hw
 * @Date: 2022-02-10-17:51:44 
*/
return Math.sign(n) * String(Math.abs (n)).split('').reverse().join('')
}

module.exports = reverseInt;
