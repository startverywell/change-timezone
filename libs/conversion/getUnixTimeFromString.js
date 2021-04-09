/*
  Gets Unix Time from a given string.
  
  Update this function to support other formats (will need to add appropriate regex functions to timeZoneRegex.js) 
*/
const momentInterface = require('./momentInterface.js');
const timeZoneRegex = require('../timeZoneRegex.js');

function getUnixTimeFromString(input, fromTimeZone) {
  if (timeZoneRegex.hasUnixTime(input)) {
    const unixTime = timeZoneRegex.getUnixTime(input);
    return unixTime;
  }

  if (timeZoneRegex.hasDateTime(input)) {
    const dateValueFromInput = timeZoneRegex.getDateTime(input);
    const unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }
}

module.exports = { getUnixTimeFromString };
