const removeFromArray = function(myArray, ...args) {
  if (args.length === 0) return myArray;
  
  if (args.length > 0) {
    let forDeletion = [args[0], args[1], ...args];
    return myArray.filter(item => !forDeletion.includes(item));
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = removeFromArray;
