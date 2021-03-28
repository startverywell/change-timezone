if (PRODUCTION) {
} else {
  function getTimeZoneState() {
    const timeZoneState = {};

    timeZoneState.currentTimeZone = localStorage.getItem('currentTimeZone');
    timeZoneState.selectedTimeZone = localStorage.getItem('selectedTimeZone');

    return timeZoneState;
  }
  module.exports = { getTimeZoneState };
}
