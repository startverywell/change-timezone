/*
  Wrapper functions to interface with moment
*/
import moment from 'moment';
import momenttz from 'moment-timezone';
import { TimeZone } from './enums';

function formatDateTime(dateTime: moment.Moment | Date): string {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}

function getZoneName(timeZone: TimeZone): string {
  return momenttz.tz(timeZone.toString()).zoneName();
}

function unixTimeToDateTime(unixTime: number, timeZone: TimeZone): string {
  const dateTime = momenttz.tz(
    formatDateTime(new Date(unixTime * 1000)),
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const convertedDateTime = dateTime.clone().tz(timeZone.toString());
  return formatDateTime(convertedDateTime);
}

function dateTimeToUnixTime(dateTime: string, timeZone: TimeZone) {
  const newDateTime = momenttz.tz(formatDateTime(new Date(dateTime)), timeZone.toString());
  return Date.parse(newDateTime.toString()) / 1000;
}

export default { getZoneName, unixTimeToDateTime, dateTimeToUnixTime };
