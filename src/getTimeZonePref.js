/*
 Gets Time Zone (only used for dev as Chrome extension makes an asynchronous call)
*/
export default function getTimeZonePref() {
  const timeZone = {};

  timeZone.currentTimeZone = localStorage.getItem('currentTimeZone');
  timeZone.selectedTimeZone = localStorage.getItem('selectedTimeZone');

  return timeZone;
}
