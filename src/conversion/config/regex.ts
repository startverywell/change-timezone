/*
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
export const REGEX_DATE_TIME_ZONE =
  /(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?:(?::\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[+-](?:\d{4}|\d{2})))))|(?:\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/;

// YYYY-MM-DD HH:MM:SS
export const REGEX_DATE_TIME_ZONE_SIMPLIFIED = /(\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/;

// HH:MM:SS AM|PM, MMM DD YYYY  (e.g 09:13:00 AM, Jun 15 2021)
export const REGEX_DATE_TIME_REVERSE = /\d{2}:\d{2}:\d{2}\s[P|A]M,\s\w{3}\s{1,2}\d{1,2}\s\d{4}/;

// Add regular expressions for strings that are supported for conversion in `conversion/toUnixTime`:
export const regexsToReplace: RegExp[] = [REGEX_DATE_TIME_ZONE, REGEX_DATE_TIME_REVERSE];
