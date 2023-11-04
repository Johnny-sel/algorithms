function quickSort(list) {
  if (list.length < 2) {
    return list;
  }

  const pivot = Math.floor(list.length / 2);
  const lh = [];
  const gh = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[pivot]) {
      lh.push(list[i]);
    } else if (list[i] > list[pivot]) {
      gh.push(list[i]);
    }
  }

  return [...quickSort(lh), list[pivot], ...quickSort(gh)];
}

module.exports = quickSort;
