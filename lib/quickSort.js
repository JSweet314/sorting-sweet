function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array.pop();
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;