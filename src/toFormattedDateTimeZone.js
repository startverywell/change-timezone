/* 
  Returns a Date Time with Zone Name formatted:
  YYYY-MM-DD HH:MM:SS ABC
  
  Examples:
  2020-01-01 09:00:00 PST
*/
const momentInterface = require('../libs/momentInterface.js');

function toFormattedDateTimeZone(unixTime, toTimeZone) {
  const dateTime = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName = momentInterface.getZoneName(toTimeZone);
  return `${dateTime} ${zoneName}`;
}

module.exports = { toFormattedDateTimeZone };
