import arrStrings from './stringsToReplace';

export default function getStringToReplace(target: string): string | null | undefined {
  let stringToReplace;
  for (const regex in arrStrings) {
    stringToReplace = arrStrings[regex].exec(target);
    if (stringToReplace) {
      stringToReplace = stringToReplace[0];
      break;
    }
  }
  return stringToReplace;
}
