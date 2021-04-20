/*
  Gets Unix Time from a given string.
  
  Update this function to support other formats (will need to add appropriate regex functions to timeZoneRegex.js) 
*/
const momentInterface = require('./momentInterface.js');
const { getDateTime } = require('./getDateTime.js');
const { getFullDateTime } = require('./getFullDateTime.js');

function toUnixTime(input, fromTimeZone) {
  const dateValueFromInput = getDateTime(input);
  let unixTime = null;
  let stringToReplace = null;
  if (dateValueFromInput) {
    unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    stringToReplace = getFullDateTime(input);
  }
  return { unixTime, stringToReplace };
  /*
   Add further formats to convert below by returning a Unix Time via ./momentInterface and ../timeZoneRegex.js as per the above
   if(regex(input)){
     return unixTime / (0000000000)
   }
  */
}

module.exports = { toUnixTime };
