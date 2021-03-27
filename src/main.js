(function () {
  const addPopup = require('./popup/add-pop-up.js').default;
  const { convertPage } = require('./convert-functions');

  // Add the Popup to the page
  addPopup();

  function getTimeZoneState() {
    const timeZoneState = {};
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
      if (!localStorage.getItem('selectedTimeZone')) {
        localStorage.setItem('selectedTimeZone', 'America/Los_Angeles');
      }
      timeZoneState.currentTimeZone = localStorage.getItem('currentTimeZone');
      timeZoneState.selectedTimeZone = localStorage.getItem('selectedTimeZone');
    } else {
      console.log('This browser has no storage support');
      timeZoneState.currentTimeZone = 'America/Los_Angeles';
      timeZoneState.selectedTimeZone = 'America/Los_Angeles';
    }

    return timeZoneState;
  }

  const { currentTimeZone, selectedTimeZone } = getTimeZoneState();

  // Run page conversion

  convertPage(currentTimeZone, selectedTimeZone);
})();
