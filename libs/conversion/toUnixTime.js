/* 
  Returns a Unix Time given a string and a Time Zone
*/
const momentInterface = require('./momentInterface.js');
const { getDateTime } = require('./getDateTime.js');

function toUnixTime(input, fromTimeZone) {
  let unixTime = null;
  const dateValueFromInput = getDateTime(input);
  if (dateValueFromInput) {
    unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
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
