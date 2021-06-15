/* 
 Add functions that convert a Date Time string and Time Zone as input and return Unix Times
*/
import momentInterface from './momentInterface';
import { TimeZone } from './enums';

type TimeFunction = (input: string, timeZone: TimeZone) => number | null;

// Converts format: YYYY-MM-DD HH:MM:SS ABC (e.g 2020-01-01 09:00:00 PST)
// https://en.wikipedia.org/wiki/ISO_8601
function isoDateTimeFormat(input: string, timeZone: TimeZone): number | null {
  const dateTime = /(\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/.exec(input);
  let unixTime: number | null = null;

  if (dateTime) {
    unixTime = momentInterface.dateTimeToUnixTime(dateTime[1], timeZone);
  }
  return unixTime;
}

const arrFunctions: TimeFunction[] = [isoDateTimeFormat];

export default arrFunctions;
