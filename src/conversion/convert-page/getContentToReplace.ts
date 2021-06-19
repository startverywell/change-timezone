import { REGEX_DATE_TIME_ZONE, REGEX_DATE_TIME_REVERSE } from '../regex';

const regexArray: RegExp[] = [REGEX_DATE_TIME_ZONE, REGEX_DATE_TIME_REVERSE];

export default function getContentToReplace(target: string): string {
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
