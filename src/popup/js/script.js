const regex = require('../../regex');

const momentInterface = require('../../moment-interface.js');

function togglePopup() {
  if (query('#tzc-options-display').classList.contains('hidden')) {
    query('#tzc-options-display').classList.remove('hidden');
  } else {
    query('#tzc-options-display').classList.add('hidden');
  }
}

function convertToUnixTime(input, fromTimeZone) {
  const computerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let dateValueFromInput;
  let unixTime;

  if (regex.hasUnixTime(input)) {
    unixTime = regex.getUnixTime(input);
  }

  if (regex.hasDateTime(input)) {
    dateValueFromInput = regex.getDateTime(input);

    const correctDateFormat = momentInterface.convertDateTimeToNewTimeZone(
      dateValueFromInput,
      fromTimeZone,
      computerTimeZone
    );
    unixTime = momentInterface.convertDateToTimeStamp(correctDateFormat);
  }
  return unixTime;
}

function convertUnixTimeToNewDateTime(unixTime, toTimeZone) {
  // We have converted the inputted date to the users time zone
  // And now we are converting from their timezone to the chosen toTimeZone
  const computerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const fromDateTime = momentInterface.convertTimeStampToDate(unixTime);

  const toDateTime = momentInterface.convertDateTimeToNewTimeZone(
    fromDateTime,
    computerTimeZone,
    toTimeZone
  );
  const zoneName = momentInterface.getZoneName(toTimeZone);

  return {
    dateTime: toDateTime,
    zoneName: zoneName,
    unixTime: unixTime.toString(),
  };
}

function convertInput() {
  // Get input from user
  const input = query('#tzc-input').value;
  const fromTimeZone = query('#tzc-from-tz').value;
  const toTimeZone = query('#tzc-to-tz').value;
  const outputPlaceholder = query('#tzc-output-placeholder');
  // User's current timezone

  if (regex.hasDateTime(input) || regex.hasUnixTime(input)) {
    // Convert input to UnixTime
    const unixTime = convertToUnixTime(input, fromTimeZone);
    const convertedDateTime = convertUnixTimeToNewDateTime(
      unixTime,
      toTimeZone
    );
    outputPlaceholder.innerHTML = `Conversion results: ${convertedDateTime.dateTime} ${convertedDateTime.zoneName} <br><br> Unix time: ${convertedDateTime.unixTime}`;
  } else {
    outputPlaceholder.innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

module.exports = { togglePopup, convertInput, convertUnixToNewDateTime };
