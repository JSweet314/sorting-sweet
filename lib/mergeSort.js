const mergeSort = array => {
  if (array.length <= 1) return array;

  let midpoint = Math.floor(array.length / 2);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
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

module.exports = mergeSort;