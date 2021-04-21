/*
  Returns the string if one of the following formats exist: 
  YYYY-MM-DD HH:MM:SS
  YYYY-MM-DDTHH:MM:SS
  YYYY-MM-DD HH:MM
  YYYY-MM-DD HH:MM:SS ABC
  YYYY-MM-DD HH:MM:SS ABCD
  YYYY-MM-DD HH:MM:SS +12 
  YYYY-MM-DD HH:MM:SS -12
  YYYY-MM-DD HH:MM:SS +1234
  YYYY-MM-DD HH:MM:SS -1234
  YYYY-MM-DD HH:MM:SS.123 ABC

  Examples:
  2020-01-01 09:00:00
  2020-01-01T09:00:00
  2020-01-01 09:00
  2020-01-01 09:00:00 PST
  2020-01-01 09:00:00 AEST
  2020-01-01 09:00:00 +12
  2020-01-01 09:00:00 -12
  2020-01-01 09:00:00 +1230
  2020-01-01 09:00:00 -1230
  2020-01-01 09:00:00.123 UTC 
*/

//TODO: Should be a loop of regexs that are possibly set somewhere else
function getStringToReplace(target) {
  const stringToReplace = /(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(
    target
  );
  if (stringToReplace) {
    return stringToReplace[0];
  }
  return;
}

module.exports = { getStringToReplace };
