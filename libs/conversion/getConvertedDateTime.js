const momentInterface = require('./momentInterface.js');

// TODO: This should only take unixTIme
function getConvertedDateTime(unixTime, toTimeZone) {
  const toDateTime = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName = momentInterface.getZoneName(toTimeZone);
  return `${toDateTime} ${zoneName}`;
}

module.exports = { getConvertedDateTime };
