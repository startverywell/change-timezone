/*
 Gets Time Zone (only used for dev as Chrome extension makes an asynchronous call)
*/

import { TimeZone } from './conversion/enums';

interface TimeZonePref {
  currentTimeZone: TimeZone;
  selectedTimeZone: TimeZone;
}

export default function getTimeZonePref() {
  const timeZone: TimeZonePref = {
    currentTimeZone: TimeZone['none'],
    selectedTimeZone: TimeZone['none'],
  };

  timeZone.currentTimeZone = <TimeZone>localStorage.getItem('currentTimeZone');
  timeZone.selectedTimeZone = <TimeZone>localStorage.getItem('selectedTimeZone');

  return timeZone;
}
