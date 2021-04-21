/* 
  Returns a Unix Time given a string and a Time Zone
*/
const conversionFuncs = require('./convertDateTime.js');

function toUnixTime(input, fromTimeZone) {
  let unixTime;

  for (const property in conversionFuncs) {
    unixTime = conversionFuncs[property](input, fromTimeZone);
    if (unixTime) {
      break;
    }
  }

  return unixTime;
}

module.exports = { toUnixTime };
