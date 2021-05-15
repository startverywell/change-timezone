/* 
  Returns a Unix Time given a string and a Time Zone
*/
import toUnixTimeHelpers from './toUnixTimeHelpers.js';

export default function toUnixTime(input, fromTimeZone) {
  let unixTime;

  for (const property in toUnixTimeHelpers) {
    // Ensures Unix Time (10 digits) is returned by the conversion functions
    unixTime = /\d{10}/.exec(toUnixTimeHelpers[property](input, fromTimeZone));
    if (unixTime) {
      unixTime = unixTime[0];
      break;
    }
  }
  return unixTime;
}
