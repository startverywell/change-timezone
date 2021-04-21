/* 
  Returns a Unix Time given a string and a Time Zone
*/
const momentInterface = require('./momentInterface.js');
const { getDateTime } = require('./getDateTime.js');

// Get rid of the "getDateTime" call and implement it here
function toUnixTime(input, fromTimeZone) {
  let unixTime = null;
  const dateValueFromInput = getDateTime(input);
  if (dateValueFromInput) {
    unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }

  /*
   Add further formats to convert below by returning a Unix Time via ./momentInterface and ../timeZoneRegex.js as per the above
   if(regex(input)){
     return unixTime / (0000000000)
   }
  */

  return unixTime;
}

module.exports = { toUnixTime };
