// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// 方法1
// function chunk(array, size) {
//     // 可分割的数组量
//     const arrayLength = Math.ceil(array.length / size);
//     const chunkArray = [];
//     for(let i =0; i< arrayLength; i++) {
//         chunkArray.push(array.slice(i*size, (i+1)*size))
//     }
//     return chunkArray;
// }

// 方法2
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         // [1]
//         // [1,2]
//         // [3]
//         // [3,4]
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size) {
//             /**
//              * [[1]]
//              * [[1,2],[3]]
//              */
//             chunked.push([element]);
//         } else {
//             // [1,2]
//             // [3,4]
//             last.push(element)
//         }
//     }

//     return chunked;
// }

// 方法3 另外一种使用slice的方式
function chunk (array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size;
    }

    return chunked;
}

module.exports = chunk;
