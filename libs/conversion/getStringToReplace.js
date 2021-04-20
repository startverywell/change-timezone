function getStringToReplace(target) {
  const stringToReplace = /(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(
    target
  );
  if (stringToReplace) {
    return stringToReplace[0];
  }
  return;
}

module.exports = { getStringToReplace };
