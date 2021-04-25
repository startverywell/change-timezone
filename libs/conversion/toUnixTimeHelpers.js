/* 
 Add functions that convert a Date Time string and Time Zone as input and return Unix Times
*/
const momentInterface = require('./momentInterface.js');

// Converts format: YYYY-MM-DD HH:MM:SS ABC (e.g 2020-01-01 09:00:00 PST)
function YMDHMS(input, fromTimeZone) {
  const dateTime = /(\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(input);
  if (dateTime) {
    const unixTime = momentInterface.dateTimeToUnixTime(dateTime[1], fromTimeZone);
    return unixTime;
  }
  return;
}

// Convert this

// Export the function you wish the converter to support here
module.exports = { YMDHMS };
