// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function binarySearch(list, value) {
  let middle;
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (value === list[middle]) {
      return value;
    }

    if (value < list[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return null;
}

module.exports = binarySearch;
