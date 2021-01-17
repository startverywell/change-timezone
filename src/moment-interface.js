const moment = require('moment');
const momenttz = require('moment-timezone');

module.exports = {
  formatDateTime(dateTime) {
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
  },
  formatAsSelectedTimeZone(dateTime, timeZone) {
    return momenttz.tz(module.exports.formatDateTime(dateTime), timeZone);
  },
  getZoneName(timeZone) {
    return momenttz.tz(timeZone).zoneName();
  },

  convertToMomentObject(dateTime, timeZone) {
    return momenttz.tz(module.exports.formatDateTime(new Date(dateTime)), timeZone);
  },

  convertDateTimeToNewTimeZone(dateTime, timeZone) {
    let convertedDateTime = dateTime.clone().tz(timeZone);
    return module.exports.formatDateTime(convertedDateTime);
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
