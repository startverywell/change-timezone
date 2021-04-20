/* 
  Returns the string if one of the following formats exist: 
  YYYY-MM-DD HH:MM:SS || YYYY-MM-DD HH:MM || YYYY-MM-DDTHH:MM
  
  Examples:
  2020-01-01 09:00:00
*/
function getDateTime(target) {
  const dateTime = /(\d{4}\-\d{2}\-\d{2}(?:\s|T)\d{2}(?:\:\d{2}){1,2})/.exec(target);
  if (dateTime) {
    return dateTime[1];
  }
  return;
}

module.exports = { getDateTime };
