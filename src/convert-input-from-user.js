const momentInterface = require('./moment-interface.js');
const regexChecks = require('./regex-checks');

export default function convertInputFromUser(
  userInput,
  fromTimeZone,
  toTimeZone
) {
  // Regex for unixtime format (10 digits / seconds since 1970): `1234567891`
  const checkUnixFormat = /\d{10}/;
  // Regex for datetime format: `2020-07-05 16:13:51`
  const checkDateTimeFormat = /\d{4}.\d{2}.\d{2}.\d{2}\:\d{2}\:\d{2}/;
  // User's current timezone
  const computerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateValueFromInput = checkDateTimeFormat.exec(userInput);
  const unixValueFromInput = checkUnixFormat.exec(userInput);

  let fromDateInUnix;

  // Return if no input is found
  if (!dateValueFromInput && !unixValueFromInput) {
    return;
  }

  if (unixValueFromInput) {
    fromDateInUnix = unixValueFromInput[0];
  }
  if (dateValueFromInput) {
    const correctDateFormat = momentInterface.convertDateTimeToNewTimeZone(
      dateValueFromInput[0],
      fromTimeZone,
      computerTimeZone
    );

    fromDateInUnix = momentInterface.convertDateToTimeStamp(correctDateFormat);
  }

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
