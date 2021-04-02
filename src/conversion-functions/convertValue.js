const momentInterface = require('./moment-interface.js');
const { toUnixTime } = require('./convertToUnix.js');

// Converts a given input and current TimeZone into a new TimeZone
function convertValue(input, fromTimeZone, toTimeZone) {
  const unixTime = toUnixTime(input, fromTimeZone);

  if (unixTime) {
    const toDateTime = momentInterface.convertTimeStampToDate(unixTime, toTimeZone);
    const zoneName = momentInterface.getZoneName(toTimeZone);
    // TODO: return one value for dateTime and zoneName (reusability)
    return {
      dateTime: toDateTime,
      zoneName: zoneName,
      unixTime: unixTime.toString(),
    };
  }
}

module.exports = { convertValue };
