/*
  Gets Unix Time from a given string.
  
  Update this function to support other formats (will need to add appropriate regex functions to timeZoneRegex.js) 
*/
const momentInterface = require('./momentInterface.js');
const timeZoneRegex = require('../timeZoneRegex.js');

function getUnixTime(input, fromTimeZone) {
  if (timeZoneRegex.hasUnixTime(input)) {
    const unixTime = timeZoneRegex.getUnixTime(input);
    return unixTime;
  }

  if (timeZoneRegex.hasDateTime(input)) {
    const dateValueFromInput = timeZoneRegex.getDateTime(input);
    const unixTime = momentInterface.dateTimeToUnixTime(dateValueFromInput, fromTimeZone);
    return unixTime;
  }
  /*
   Add further formats to convert below by returning a Unix Time via ./momentInterface and ../timeZoneRegex.js as per the above
   if(regex(input)){
     return unixTime / (0000000000)
   }
  */
}

module.exports = { getUnixTime };
