function filterMe (array) {
  return array
}

const bubbleSort = array => {
  let pairwiseSorting;
  let n = array.length;
  do {
    pairwiseSorting = false;
    for (let i = 1; i < n; i++) {
      if (array[i] > array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        pairwiseSorting = true;
      }
    }
    n--;
  } while (pairwiseSorting);
  return array;
}

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let comparisonValue = array[i];
    let j = i -1;
    while (j >= 0 && comparisonValue > array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = comparisonValue;
  }
  return array;
}

const merge = (left, right) => {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

const mergeSort = array => {
  if (array.length <= 1) return array;

  let midpoint = Math.floor(array.length / 2);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

const quickSort = array => {
  if (array.length <= 1) return array;
  let pivot = array.pop();
  let lessThan = [];
  let greaterThan = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

export default filterMe
