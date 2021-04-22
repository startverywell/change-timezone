const stringsToReplace = require('./stringsToReplace.js');

function getStringToReplace(target) {
  let stringToReplace;
  for (const regex in stringsToReplace) {
    stringToReplace = stringsToReplace[regex].exec(target);
    if (stringToReplace) {
      stringToReplace = stringToReplace[0];
      break;
    }
  }
  return stringToReplace;
}

module.exports = { getStringToReplace };
