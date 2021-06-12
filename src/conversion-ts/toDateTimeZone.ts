/* 
  Returns a Date Time with Zone Name formatted:
  YYYY-MM-DD HH:MM:SS ABC
  
  Examples:
  2020-01-01 09:00:00 PST
*/
import momentInterface from './momentInterface.js';
import { TimeZoneType } from './enums';

export default function toDateTimeZone(unixTime: number, toTimeZone: TimeZoneType) {
  const dateTime: string = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName: string = momentInterface.getZoneName(toTimeZone);

  return `${dateTime} ${zoneName}`;
}
