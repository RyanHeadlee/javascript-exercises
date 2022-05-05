const ftoc = function(degrees) {
  let result = (degrees - 32) * (5/9);
  if (result === Math.round(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

const ctof = function(degrees) {
  let result = degrees * (9/5) + 32;
  if (result === Math.round(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
