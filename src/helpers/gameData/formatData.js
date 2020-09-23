const formatData = function (array) {
  const boardWidth = Math.sqrt(array.length);
  let groupCounter = boardWidth
  let result = [];

  while (groupCounter > 0) {
    groupCounter--;
    let group = array.splice(0, boardWidth)
    result.push(group)
  }
  return result;
};

module.exports = { formatData }