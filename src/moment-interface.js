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

  convertTimeStampToDate(unixTime) {
    const dateTime = new Date(unixTime * 1000);
    return dateTime;
  },

  convertDateToTimeStamp(dateTimeFormat) {
    const unixTime = Date.parse(dateTimeFormat) / 1000;
    return unixTime;
  },
};
