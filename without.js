const without = function (sourceArray, itemsToRemove) {
  let finalArray = sourceArray;
  for (let x = 0; x < sourceArray.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (sourceArray[x] === itemsToRemove[y]) {
          indexToRemove = finalArray.indexOf(sourceArray[x]);
          finalArray.splice(indexToRemove, 1);
      }
    }
  }
  return finalArray;
};

module.exports = without;