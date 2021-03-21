const momentInterface = require('./moment-interface.js');
const regexChecks = require('./regex-checks');

export default function runPageConversion(
  elements,
  currentTimeZone,
  toTimeZone
) {
  const zoneName = momentInterface.getZoneName(toTimeZone);

  if (elements.length != 0) {
    elements.forEach(function (element) {
      if (regexChecks.hasDateTime(element.innerHTML)) {
        const dateTime = regexChecks.getDateTime(element.innerHTML);
        // Not currently used as I need to work out logic for Time Zone look up
        // const timeZoneAbbrev = regexChecks.getTimeZoneAbbrev(dateTimeMatch[0]);
        // if (!timeZoneAbbrev) {
        //   timeZoneAbbrev = momentInterface.getZoneName('America/Los_Angeles');
        // }

        const updatedDateTime = momentInterface.convertDateTimeToNewTimeZone(
          dateTime,
          currentTimeZone,
          toTimeZone
        );

        element.innerHTML = `${updatedDateTime} ${zoneName}`;
      } else {
        console.log(`${element.innerHTML} did not match our target regex`);
      }
    });
  } else {
    console.log('No elements to convert');
  }
}
