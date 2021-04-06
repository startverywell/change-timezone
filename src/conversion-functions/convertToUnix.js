const regex = require('../regex/regex.js');
const momentInterface = require('./moment-interface.js');

// Checks if string has Unix or Date Time and returns the UnixTime
function toUnixTime(input, fromTimeZone) {
  if (regex.hasUnixTime(input)) {
    const unixTime = regex.getUnixTime(input);
    return unixTime;
  }

  if (regex.hasDateTime(input)) {
    const dateValueFromInput = regex.getDateTime(input);
    const unixTime = momentInterface.convertDateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }
}

module.exports = { toUnixTime };
