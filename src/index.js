
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) {
    return [];
  }
  let result = [];
  let k = true;
  for (let row of matrix) {
    if (k == true) {
      for (i = 0; i < row.length; i++) {
        let a = row[i];
        result.push(a);
      }
      k = !k;
    }
    else {
      for (i = row.length-1; i >= 0; i--) {
        let a = row[i];
        result.push(a);
      }
      k = !k;
    }
    

  }
  return result;
}
