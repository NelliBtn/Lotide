const findKeyByValue = function (object, value) {
  const arrayOfKeys = Object.keys(object);
  for (let key of arrayOfKeys) {
    if (object[key] === value) {
      return key;
    }
  } return undefined;
};

module.exports = findKeyByValue;