const moment = require('moment');
const momenttz = require('moment-timezone');

function formatDateTime(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}

function formatAsSelectedTimeZone(dateTime, timeZone) {
  return momenttz.tz(formatDateTime(dateTime), timeZone);
}

function getZoneName(timeZone) {
  return momenttz.tz(timeZone).zoneName();
}

function convertTimeStampToDate(unixTime, newTimeZone) {
  const dateTime = momenttz.tz(
    formatDateTime(new Date(unixTime * 1000)),
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const convertedDateTime = dateTime.clone().tz(newTimeZone);
  return formatDateTime(convertedDateTime);
}

function convertDateTimeToNewTimeZone(dateTime, timeZone, newTimeZone) {
  dateTime = momenttz.tz(formatDateTime(new Date(dateTime)), timeZone);
  const convertedDateTime = dateTime.clone().tz(newTimeZone);
  return formatDateTime(convertedDateTime);
}

function convertDateTimeToUnixTime(dateTime, zoneName) {
  dateTime = momenttz.tz(formatDateTime(new Date(dateTime)), zoneName);
  const unixTime = Date.parse(dateTime) / 1000;
  return unixTime;
}

function convertDateToTimeStamp(dateTime) {
  const unixTime = Date.parse(dateTime) / 1000;
  return unixTime;
}

module.exports = {
  formatAsSelectedTimeZone,
  getZoneName,
  convertDateTimeToNewTimeZone,
  convertTimeStampToDate,
  convertDateTimeToUnixTime,
  convertDateToTimeStamp,
};
