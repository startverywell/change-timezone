/* 
  Returns a Date Time with Zone Name formatted:
  YYYY-MM-DD HH:MM:SS ABC
  
  Examples:
  2020-01-01 09:00:00 PST
*/
import momentInterface from '../../libs/momentInterface.js';

export default function toDateTimeZone(unixTime, toTimeZone) {
  const dateTime = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName = momentInterface.getZoneName(toTimeZone);
  return `${dateTime} ${zoneName}`;
}
