const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let comparisonValue = array[i];
    let j = i - 1;

    while (j >= 0 && comparisonValue < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = comparisonValue;
  }

  return array;
}

module.exports = insertionSort;