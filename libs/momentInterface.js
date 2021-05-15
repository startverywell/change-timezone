/*
  Wrapper functions to interface with moment
*/
import moment from 'moment';
import momenttz from 'moment-timezone';

function formatDateTime(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}

function getZoneName(timeZone) {
  return momenttz.tz(timeZone).zoneName();
}

function unixTimeToDateTime(unixTime, timeZone) {
  const dateTime = momenttz.tz(
    formatDateTime(new Date(unixTime * 1000)),
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const convertedDateTime = dateTime.clone().tz(timeZone);
  return formatDateTime(convertedDateTime);
}

function dateTimeToUnixTime(dateTime, timeZone) {
  dateTime = momenttz.tz(formatDateTime(new Date(dateTime)), timeZone);
  const unixTime = Date.parse(dateTime) / 1000;
  return unixTime;
}

export default { getZoneName, unixTimeToDateTime, dateTimeToUnixTime };
