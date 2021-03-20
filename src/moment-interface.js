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
    let convertedDateTime = dateTime.clone().tz(newTimeZone);
    return formatDateTime(convertedDateTime);
  },

  convertTimeStampToDate(unixFormat) {
    const dateTimeFormat = new Date(unixFormat * 1000);
    return dateTimeFormat;
  },

  convertDateToTimeStamp(dateTimeFormat) {
    let unixFormat = Date.parse(dateTimeFormat);
    return unixFormat / 1000;
  },
};
