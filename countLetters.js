const countLetters = function (string) {
  let letters = {};
  string = string.split(' ').join('');
  for (let char of string) {
    if (letters[char]) {
      letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  }
return letters;
};

module.exports = countLetters;
