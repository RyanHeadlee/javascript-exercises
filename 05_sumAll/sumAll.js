const sumAll = function(range1, range2) {
  let x;
  let sum;
  let doOnce = true;
  if (range1 < 0 || range2 < 0 || typeof(range1) !== "number" || typeof(range2) !== "number") {
    return "ERROR";
  } else if (range1 < range2) {  
    for (range1; range1 < range2; range1++) {
      if (doOnce === true) {
        x = range1 + 1;
        sum = range1 + x;
        x++;
        doOnce = false;
      } else {
        x;
        sum = sum + x;
        x++;
      }
    }
    return sum;
  } else if (range1 > range2) {
    for (range2; range2 < range1; range2++) {
      if (doOnce === true) {
        x = range2 +1;
        sum = range2 + x;
        x++;
        doOnce = false;
      } else {
        x;
        sum = sum + x;
        x++;
      }
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;