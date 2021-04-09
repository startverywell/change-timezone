const momentInterface = require('./momentInterface.js');
const dateTimeRegex = require('../dateTimeRegex.js');

// Checks if string has Unix or Date Time and returns the UnixTime
function convertToUnixTime(input, fromTimeZone) {
  if (dateTimeRegex.hasUnixTime(input)) {
    const unixTime = dateTimeRegex.getUnixTime(input);
    return unixTime;
  }

  if (dateTimeRegex.hasDateTime(input)) {
    const dateValueFromInput = dateTimeRegex.getDateTime(input);
    const unixTime = momentInterface.convertDateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }
}

module.exports = { convertToUnixTime };
