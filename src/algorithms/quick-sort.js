function quickSort(list) {
  if (list.length < 2) {
    return list;
  }

  const pivot = Math.floor(list.length / 2);
  const lt = [];
  const gt = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[pivot]) {
      lt.push(list[i]);
    } else if (list[i] > list[pivot]) {
      gt.push(list[i]);
    }
  }

  return [...quickSort(lt), list[pivot], ...quickSort(gt)];
}

module.exports = quickSort;
