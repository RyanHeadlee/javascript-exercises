let results;

const repeatString = function(string, num) {
  if (num === 1) {
    return string;
  } else if (num === 0) {
    return "";
  } else if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < (num - 1); i++) {
      if (i === 0) {
        results = string + string;
      } else {
        results = results + string;
      }
    }
  }
  return results;
};

// Do not edit below this line
module.exports = repeatString;