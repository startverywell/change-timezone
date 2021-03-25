module.exports = {
  hasDateTime(target) {
    const targetRegexToMatch = /(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTimeMatch = targetRegexToMatch.exec(target);
    return dateTimeMatch ? true : false;
  },

  hasUnixTime(target) {
    const targetRegexToMatch = /\d{10}/;
    const unixTimeMatch = targetRegexToMatch.exec(target);
    return unixTimeMatch ? true : false;
  },

  getDateTime(dateTimeMatch) {
    const dateTimeRegex = /(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTime = dateTimeRegex.exec(dateTimeMatch);
    return dateTime[1];
  },

  getTimeZoneAbbrev(dateTimeMatch) {
    const timeZoneAbbrevRegex = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/;
    const timeZoneAbbrev = timeZoneAbbrevRegex.exec(dateTimeMatch);
    return timeZoneAbbrev[1];
  },

  getUnixTime(userInput) {
    const checkUnixFormat = /\d{10}/;
    const unixValueFromInput = checkUnixFormat.exec(userInput);
    return unixValueFromInput[0];
  },
};
