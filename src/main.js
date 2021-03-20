(function () {
  const {
    getZoneName,
    convertToMomentObject,
    convertDateTimeToNewTimeZone,
  } = require('./moment-interface.js');

  function getDateTime(dateTimeMatch) {
    const dateTimeRegex = /(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTime = dateTimeRegex.exec(dateTimeMatch);
    return dateTime[1];
  }

  function getTimeZoneAbbrev(dateTimeMatch) {
    const timeZoneAbbrevRegex = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/;
    let timeZoneAbbrev = timeZoneAbbrevRegex.exec(dateTimeMatch);
    if (timeZoneAbbrev) {
      timeZoneAbbrev = timeZoneAbbrev[1];
    } else {
      timeZoneAbbrev = getZoneName('America/Los_Angeles');
    }
    return timeZoneAbbrev;
  }

  function hasDateTime(target) {
    const targetRegexToMatch = /(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTimeMatch = targetRegexToMatch.exec(target);
    return dateTimeMatch ? true : false;
  }

  function runPageConversion(elements, currentPageTimeZone, toTimeZone) {
    const zoneName = getZoneName(toTimeZone);

    if (elements.length != 0) {
      elements.forEach(function (element) {
        if (hasDateTime(element.innerHTML)) {
          const dateTime = getDateTime(element.innerHTML);
          //const timeZone = getTimeZoneAbbrev(dateTimeMatch[0]); // Not currently used as I need to work out logic for Time Zone look up

          // Need to remove this coupling to moment (returning a moment object)
          const dateTimeAsMomentObject = convertToMomentObject(dateTime, currentPageTimeZone);
          const updatedDateTime = convertDateTimeToNewTimeZone(dateTimeAsMomentObject, toTimeZone);

          element.innerHTML = `${updatedDateTime} ${zoneName}`;
        } else {
          console.log(`${element.innerHTML} did not match our target regex`);
        }
      });
    } else {
      console.log('No elements to convert on this on this page');
    }
  }

  const ptTimeZone = 'America/Los_Angeles';
  const currentPageTimeZone = 'America/Los_Angeles';
  const toTimeZone = 'Australia/Canberra';
  runPageConversion(document.body.querySelectorAll('td'), currentPageTimeZone, toTimeZone);
})();
