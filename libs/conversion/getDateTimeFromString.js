const momentInterface = require('./momentInterface.js');
const { getUnixTimeFromString } = require('./getUnixTimeFromString.js');

function getDateTimeFromString(input, fromTimeZone, toTimeZone) {
  const unixTime = getUnixTimeFromString(input, fromTimeZone);

  if (unixTime) {
    const toDateTime = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
    const zoneName = momentInterface.getZoneName(toTimeZone);
    return `${toDateTime} ${zoneName}`;
  }
}

module.exports = { getDateTimeFromString };
