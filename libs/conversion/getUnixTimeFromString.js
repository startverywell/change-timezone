const momentInterface = require('./momentInterface.js');
const dateTimeRegex = require('../dateTimeRegex.js');
// TODO: change "getUnixTimeFromString()"
// Checks if a string has Unix or Date Time and returns the UnixTime
function getUnixTimeFromString(input, fromTimeZone) {
  if (dateTimeRegex.hasUnixTime(input)) {
    const unixTime = dateTimeRegex.getUnixTime(input);
    return unixTime;
  }

  if (dateTimeRegex.hasDateTime(input)) {
    const dateValueFromInput = dateTimeRegex.getDateTime(input);
    const unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }
}

module.exports = { getUnixTimeFromString };
