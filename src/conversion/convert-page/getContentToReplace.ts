import { regexsToReplace } from '../config';

// Checks the content against our regular expressions and returns match
export default function getContentToReplace(target: string): string {
  let stringToReplace = '';
  for (const regex in regexsToReplace) {
    const regexResult = regexsToReplace[regex].exec(target);
    if (regexResult) {
      stringToReplace = regexResult[0];
      break;
    }
  }
  return stringToReplace;
}
