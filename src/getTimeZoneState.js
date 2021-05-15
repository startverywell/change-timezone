/*
 Gets Time Zone (only used for dev as Chrome extension makes an asynchronous call)
*/
export default function getTimeZoneState() {
  const timeZoneState = {};

  timeZoneState.currentTimeZone = localStorage.getItem('currentTimeZone');
  timeZoneState.selectedTimeZone = localStorage.getItem('selectedTimeZone');

  return timeZoneState;
}
