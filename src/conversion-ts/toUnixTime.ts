/* 
  Returns a Unix Time given a string and a Time Zone
*/
import toUnixTimeHelpers from './toUnixTimeHelpers';
import { TimeZone } from './enums.js';

export default function toUnixTime(input: string, timeZone: TimeZone): number | null {
  let unixTime: number | null = null;

  for (const property in toUnixTimeHelpers) {
    unixTime = toUnixTimeHelpers[property](input, timeZone);
    if (unixTime) {
      break;
    }
  }
  return unixTime;
}
