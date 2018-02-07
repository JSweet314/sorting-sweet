const bubbleSort = array => {
  let pairwiseSorting;
  let n = array.length;

  do {
    pairwiseSorting = false;
    for (let i = 1; i < n; i++) {
      if (array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        pairwiseSorting = true;
      }
    }
    n--;
  } while (pairwiseSorting);
  return array;
}

// const bubbleSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length - i; j++) {
//       if (array[j] < array[j - 1]) {
//         [array[j - 1], array[j]] = [array[j], array[j - 1]];
//       }
//     }
//   }
//   return array;
// }

module.exports = bubbleSort;