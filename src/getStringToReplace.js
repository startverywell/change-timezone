import stringsToReplace from './stringsToReplace.js';

export default function getStringToReplace(target) {
  let stringToReplace;
  for (const regex in stringsToReplace) {
    stringToReplace = stringsToReplace[regex].exec(target);
    if (stringToReplace) {
      stringToReplace = stringToReplace[0];
      break;
    }
  }
  return stringToReplace;
}
