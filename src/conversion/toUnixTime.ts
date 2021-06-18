/* 
  Returns a Unix Time given a string and a Time Zone
*/
import momentInterface from './momentInterface';
import { TimeZone } from './enums.js';
import { REGEX_DATE_TIME_ZONE_SIMPLIFIED, REGEX_DATE_TIME_REVERSE } from './regex';

// Converts format: YYYY-MM-DD HH:MM:SS ABC (e.g 2020-01-01 09:00:00 PST)
// https://en.wikipedia.org/wiki/ISO_8601
function dateTimeZone(input: string, timeZone: TimeZone): number | null {
  const dateTime = REGEX_DATE_TIME_ZONE_SIMPLIFIED.exec(input);
  let unixTime: number | null = null;

  if (dateTime) {
    unixTime = momentInterface.dateTimeToUnixTime(dateTime[1], timeZone);
  }
  return unixTime;
}

// Converts format HH:MM:SS AM|PM, MMM DD YYYY  (e.g 09:13:00 AM, Jun 15 2021)
function dateTimeReverse(input: string, timeZone: TimeZone): number | null {
  const dateTime = REGEX_DATE_TIME_REVERSE.exec(input);
  let unixTime: number | null = null;

  if (dateTime) {
    unixTime = momentInterface.dateTimeToUnixTime(dateTime[0], timeZone);
  }
  return unixTime;
}

type ToUnixTime = (input: string, timeZone: TimeZone) => number | null;

const toUnixFuncs: ToUnixTime[] = [dateTimeZone, dateTimeReverse];

export default function toUnixTime(input: string, timeZone: TimeZone): number | null {
  let unixTime: number | null = null;

  for (const property in toUnixFuncs) {
    unixTime = toUnixFuncs[property](input, timeZone);
    if (unixTime) {
      break;
    }
  }
  return unixTime;
}
