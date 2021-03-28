(function () {
  const addPopup = require('./pop-up/addPopup.js').default;
  const { convertPage } = require('./conversion-functions/convertPage.js');
  const { getTimeZoneState } = require('./getTimeZoneState.js');
  // Add the Popup to the page
  addPopup();
  // If we are bundling in Production, we are working with the Chrome Storage API
  // TODO: Change to Switch
  if (PRODUCTION) {
    console.log('Production = ' + PRODUCTION);
    chrome.storage.local.get(['currentTimeZone', 'selectedTimeZone'], function (result) {
      let { currentTimeZone, selectedTimeZone } = result;
      if (currentTimeZone) {
        chrome.storage.local.set({ currentTimeZone: 'America/Los_Angeles' }, function () {
          convertPage(currentTimeZone, selectedTimeZone);
        });
      }
      if (!selectedTimeZone) {
        currentTimeZone = 'America/Los_Angeles';
        selectedTimeZone = 'America/Los_Angeles';
        chrome.storage.local.set({ currentTimeZone, selectedTimeZone }, function () {
          convertPage(currentTimeZone, selectedTimeZone);
        });
      }
    });
  } else {
    console.log('Production = ' + PRODUCTION);
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
      if (!localStorage.getItem('selectedTimeZone')) {
        localStorage.setItem('selectedTimeZone', 'America/Los_Angeles');
      }
      const { currentTimeZone, selectedTimeZone } = getTimeZoneState();

      convertPage(currentTimeZone, selectedTimeZone);
    } else {
      console.log('This browser has no storage support');
      const currentTimeZone = 'America/Los_Angeles';
      const selectedTimeZone = 'America/Los_Angeles';
      convertPage(currentTimeZone, selectedTimeZone);
    }
  }
})();
