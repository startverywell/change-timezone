/* 
  Returns the string if one of the following formats exist: 
  YYYY-MM-DD HH:MM:SS || YYYY-MM-DD HH:MM || YYYY-MM-DDTHH:MM
  
  Examples:
  2020-01-01 09:00:00
*/
const momentInterface = require('./momentInterface.js');

function convertDateTime(input, fromTimeZone) {
  const dateTime = /(\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(input);
  if (dateTime) {
    const unixTime = momentInterface.dateTimeToUnixTime(dateTime[1], fromTimeZone);
    return unixTime;
  }
  return;
}

module.exports = { convertDateTime };
