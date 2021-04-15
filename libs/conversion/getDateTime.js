function getDateTime(target) {
  const dateTime = /(\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(target);
  if (dateTime) {
    return dateTime[1];
  }
  return;
}

module.exports = { getDateTime };
