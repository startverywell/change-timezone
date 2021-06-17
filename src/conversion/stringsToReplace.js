/*
    Regex for the following formats:
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

    Examples:
    2020-01-01 09:00:00
    2020-01-01T09:00:00
    2020-01-01 09:00
    2020-01-01 09:00:00 PST
    2020-01-01 09:00:00 AEST
    2020-01-01 09:00:00 +12
    2020-01-01 09:00:00 -12
    2020-01-01 09:00:00 +1230
    2020-01-01 09:00:00 -1230
    2020-01-01 09:00:00.123 UTC 
*/
const dateTimeZone =
  /(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?:(?::\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[+-](?:\d{4}|\d{2})))))|(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/;

const dateTimeReverse = /\d{2}:\d{2}:\d{2}\s[P|A]M,\s\w{3}\s{1,2}\d{1,2}\s\d{4}/;
module.exports = { dateTimeZone, dateTimeReverse };
