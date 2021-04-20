/* 
  Returns the string (Unix Time of 10 digits) if one of the following formats exist: 
  1234567891
  
  Examples:
  1234567891
*/
function getUnixTime(target) {
  const unixTime = /\d{10}/.exec(target);
  if (unixTime) {
    return unixTime[0];
  }
  return;
}
module.exports = { getUnixTime };
