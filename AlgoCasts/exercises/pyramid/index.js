// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n -1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2 * n -1; column++) {
//             if(midpoint - row <= column && midpoint + row >= column ) {
//                 level += '#'
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level)
//     }
// }

function pyramid(n, row = 0, level = '' ) {
    const midpoint = Math.floor((2 * n -1) / 2);
    // n 和行数相等 return
    if(n === row) {
        return;
    }
    // 如果打印的stair和2n-1等差数列相同
    if(level.length === (2 *n - 1)) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length ) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;
