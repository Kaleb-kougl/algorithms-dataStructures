/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j - 1 > -1 && i - 1 > -1) {
        if (matrix[i - 1][j - 1] === matrix[i][j]) {
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
