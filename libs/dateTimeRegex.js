// Checks if there is a DateTime in the input:
// YYYY-MM-DD HH:mm:ss (Zone Name)
// Example: 2021-01-01 19:00:00 PT
function hasDateTime(target) {
  const dateTimeMatch = /(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(
    target
  );
  return dateTimeMatch ? true : false;
}

// Checks if there is 10 digits in the input (unix time)
function hasUnixTime(target) {
  const unixTimeMatch = /\d{10}/.exec(target);
  return unixTimeMatch ? true : false;
}

// Gets the DateTime value from the input
// (YYYY-MM-DD HH:mm:ss)
function getDateTime(target) {
  const dateTime = /(\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(target);
  return dateTime[1];
}

// Gets the DateTime value from the input
// Examples: PT, PST, AEST, +12, -12
function getTimeZoneAbbrev(target) {
  const timeZone = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/.exec(target);
  return timeZone[1];
}

// Gets the UnixTime value from the input
// Example: 0000000000
function getUnixTime(target) {
  const unixTime = /\d{10}/.exec(target);
  return unixTime[0];
}

module.exports = {
  hasDateTime,
  hasUnixTime,
  getDateTime,
  getTimeZoneAbbrev,
  getUnixTime,
};
