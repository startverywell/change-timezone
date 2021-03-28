const momentInterface = require('./moment-interface.js');

// Converts a given input and current TimeZone into a new TimeZone
// input should be unix
function convertValue(unixTime, selectedTimeZone) {
  const toDateTime = momentInterface.convertTimeStampToDate(
    unixTime,
    selectedTimeZone
  );
  const zoneName = momentInterface.getZoneName(selectedTimeZone);

  return {
    dateTime: toDateTime,
    zoneName: zoneName,
    unixTime: unixTime.toString(),
  };
}

module.exports = { convertValue };
