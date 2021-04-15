const momentInterface = require('./momentInterface.js');

function toDateTime(unixTime, toTimeZone) {
  const dateTime = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName = momentInterface.getZoneName(toTimeZone);
  return `${dateTime} ${zoneName}`;
}

module.exports = { toDateTime };
