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

module.exports = bubbleSort;