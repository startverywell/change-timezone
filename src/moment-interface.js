const moment = require('moment');
const momenttz = require('moment-timezone');

function formatDateTime(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}

module.exports = {
  formatAsSelectedTimeZone(dateTime, timeZone) {
    return momenttz.tz(formatDateTime(dateTime), timeZone);
  },
  getZoneName(timeZone) {
    return momenttz.tz(timeZone).zoneName();
  },
  convertDateTimeToNewTimeZone(dateTime, timeZone, newTimeZone) {
    dateTime = momenttz.tz(formatDateTime(new Date(dateTime)), timeZone);
    const convertedDateTime = dateTime.clone().tz(newTimeZone);
    return formatDateTime(convertedDateTime);
  },
  convertTimeStampToDate(unixTime, newTimeZone) {
    const dateTime = momenttz.tz(
      formatDateTime(new Date(unixTime * 1000)),
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );

    const convertedDateTime = dateTime.clone().tz(newTimeZone);
    return formatDateTime(convertedDateTime);
  },
  convertDateTimeWithZoneNameToUnixTime(dateTimeFormat, timeZone) {
    const dateTime = momenttz.tz(
      formatDateTime(new Date(dateTimeFormat)),
      timeZone
    );
    const unixTime = Date.parse(dateTime) / 1000;
    return unixTime;
  },
  convertDateToTimeStamp(dateTimeFormat) {
    const unixTime = Date.parse(dateTimeFormat) / 1000;
    return unixTime;
  },
};
