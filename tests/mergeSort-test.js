const { expect } = require('chai');
const mergeSort = require('../lib/mergeSort.js');

describe('mergeSort', () => {
  let bigArray;

  beforeEach(() => {
    bigArray = [];
    let min = -1000;
    let max = 1000;
    let maxCount = 1000000;

    for (let i = 0; i < maxCount; i++) {
      bigArray.push(Math.floor(Math.random() * (max - min) + min));
    }
  });

  it('should sort an array of numbers', () => {
    let array = [1, 3, 2, 7, 0, 10, 24]

    array = mergeSort(array);

    expect(array).to.deep.equal([ 0, 1, 2, 3, 7, 10, 24]);
  });

  it('should sort an array of letters', () => {
    let array = ['d', 's', 'g', 's', 'r', 'h', 'n', 'q', 'e', 'y'];

    array = mergeSort(array);

    expect(array).to.deep.equal(['d', 'e', 'g', 'h', 'n', 'q', 'r', 's', 's', 'y']);
  });

  it('should sort a large array of positive and negative values', () => {
    bigArray = mergeSort(bigArray);
    for (let i = 1; i < bigArray.length; i++) {
      expect(bigArray[i]).to.be.at.least(bigArray[i - 1]);
    }
  });
});