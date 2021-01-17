function formatDateTime(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}
function formatAsSelectedTimeZone(dateTime, timeZone) {
  return moment.tz(formatDateTime(dateTime), timeZone);
}
function getZoneName(timeZone) {
  return moment.tz(timeZone).zoneName();
}

function convertToMomentObject(dateTime, timeZone) {
  return moment.tz(formatDateTime(new Date(dateTime)), timeZone);
}

function convertDateTimeToNewTimeZone(dateTime, timeZone) {
  let convertedDateTime = dateTime.clone().tz(timeZone);
  return formatDateTime(convertedDateTime);
}

function convertTimeStampToDate(unixFormat) {
  const dateTimeFormat = new Date(unixFormat * 1000);
  return dateTimeFormat;
}

function convertDateToTimeStamp(dateTimeFormat) {
  let unixFormat = Date.parse(dateTimeFormat);
  return unixFormat / 1000;
}
