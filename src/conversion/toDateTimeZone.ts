/* 
  Returns a Date Time with Zone Name formatted:
  YYYY-MM-DD HH:MM:SS ABC / 2020-01-01 09:00:00 PST
*/
import momentInterface from './momentInterface';
import { TimeZone } from './enums';

export default function toDateTimeZone(unixTime: number, toTimeZone: TimeZone) {
  const dateTime: string = momentInterface.unixTimeToDateTime(unixTime, toTimeZone);
  const zoneName: string = momentInterface.getZoneName(toTimeZone);
  return `${dateTime} ${zoneName}`;
}
