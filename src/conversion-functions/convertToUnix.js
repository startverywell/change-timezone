const regex = require('../regex/regex.js');
const momentInterface = require('./moment-interface.js');

function convertToUnix(dateTime, currentTimeZone) {
  const unixTime = momentInterface.convertDateTimeWithZoneNameToUnixTime(
    dateTime,
    currentTimeZone
  );
  return unixTime;
}

module.exports = { convertToUnix };
