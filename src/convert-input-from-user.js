const momentInterface = require('./moment-interface.js');
const regexChecks = require('./regex-checks');

export default function convertInputFromUser(
  userInput,
  fromTimeZone,
  toTimeZone
) {
  // User's current timezone
  const computerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let dateValueFromInput;
  let unixValueFromInput;
  let fromDateInUnix;

  if (regexChecks.hasDateTime(userInput)) {
    dateValueFromInput = regexChecks.getDateTime(userInput);
  }
  if (regexChecks.hasUnixTime(userInput)) {
    unixValueFromInput = regexChecks.getUnixTime(userInput);
  }
  // Return if no input is found
  if (!dateValueFromInput && !unixValueFromInput) {
    return;
  }

  if (unixValueFromInput) {
    fromDateInUnix = unixValueFromInput;
  }
  if (dateValueFromInput) {
    const correctDateFormat = momentInterface.convertDateTimeToNewTimeZone(
      dateValueFromInput,
      fromTimeZone,
      computerTimeZone
    );
    fromDateInUnix = momentInterface.convertDateToTimeStamp(correctDateFormat);
  }

  // We have converted the inputted date to the users time zone
  // And now we are converting from their timezone to the chosen toTimeZone
  const fromDate = momentInterface.convertTimeStampToDate(fromDateInUnix);
  const toDate = momentInterface.convertDateTimeToNewTimeZone(
    fromDate,
    computerTimeZone,
    toTimeZone
  );
  const toTimeZoneName = momentInterface.getZoneName(toTimeZone);

  return {
    toDate: toDate,
    toTimeZoneName: toTimeZoneName,
    unixFormat: fromDateInUnix.toString(),
  };
}
