import { regexArray } from '../config';

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
