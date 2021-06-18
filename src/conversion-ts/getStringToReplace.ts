/*
    Replaces the following formats that are found on the page:
    YYYY-MM-DD HH:MM:SS
    YYYY-MM-DDTHH:MM:SS
    YYYY-MM-DD HH:MM
    YYYY-MM-DD HH:MM:SS ABC
    YYYY-MM-DD HH:MM:SS ABCD
    YYYY-MM-DD HH:MM:SS +12 
    YYYY-MM-DD HH:MM:SS -12
    YYYY-MM-DD HH:MM:SS +1234
    YYYY-MM-DD HH:MM:SS -1234
    YYYY-MM-DD HH:MM:SS.123 ABC
*/
const dateTimeZone =
  /(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?:(?::\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[+-](?:\d{4}|\d{2})))))|(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/;

const dateTimeReverse = /\d{2}:\d{2}:\d{2}\s[P|A]M,\s\w{3}\s{1,2}\d{1,2}\s\d{4}/;

const regexArray: RegExp[] = [dateTimeZone, dateTimeReverse];

export default function getStringToReplace(target: string): string {
  let stringToReplace = '';
  for (const regex in regexArray) {
    const regexResult = regexArray[regex].exec(target);
    if (regexResult) {
      stringToReplace = regexResult[0];
      break;
    }
  }
  return stringToReplace;
}
