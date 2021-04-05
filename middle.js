const middle = function (theWholeArray) {
  const length = theWholeArray.length;
  let midNumbers = [];
  const midIndex = Math.floor(length / 2);
  if (length <= 2) {
    midNumbers = [];
  } else if (length % 2 === 0) {
    midNumbers.push(theWholeArray[midIndex - 1]);
    midNumbers.push(theWholeArray[midIndex]);
  } else {
    midNumbers.push(theWholeArray[midIndex]);
  };
  return midNumbers;

};
module.exports = middle;



