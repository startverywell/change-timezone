/* 
 Add functions that convert a Date Time string and Time Zone as input and return Unix Times
*/
import momentInterface from './momentInterface';
import { TimeZone } from './enums';

// Converts format: YYYY-MM-DD HH:MM:SS ABC (e.g 2020-01-01 09:00:00 PST)
// https://en.wikipedia.org/wiki/ISO_8601
function isoDateTimeFormat(input: string, fromTimeZone: TimeZone) {
  const dateTime = /(\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/.exec(input);
  if (dateTime) {
    return momentInterface.dateTimeToUnixTime(dateTime[1], fromTimeZone);
  }
}

const arrFunctions: Function[] = [isoDateTimeFormat];

export default arrFunctions;
