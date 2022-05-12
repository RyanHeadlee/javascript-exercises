const palindromes = function (word) {
  processedWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    processedWord
      .split("")
      .reverse()
      .join("") == processedWord
  );
};

// Do not edit below this line
module.exports = palindromes;
