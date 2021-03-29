(function () {
  const addPopup = require('./pop-up/addPopup.js').default;
  const { convertPage } = require('./conversion-functions/convertPage.js');
  const { setTimeZoneState } = require('./setTimeZoneState.js');

  // Add the Popup to the page
  addPopup();
  // If we are bundling in Production, we are working with the Chrome Storage API
  // Change to do initial check for installation, then pass the "selectedTimeZone" so I don't have to check it on the convertPage
  let selectedTimeZone;
  console.log('Production = ' + PRODUCTION);
  if (PRODUCTION) {
    chrome.storage.local.set({ currentTimeZone: 'America/Los_Angeles' }, function () {
      chrome.storage.local.get(['selectedTimeZone'], function (result) {
        selectedTimeZone = result.selectedTimeZone;
        // Only runs on installation
        if (!selectedTimeZone) {
          console.log('Installation');
          setTimeZoneState('America/Los_Angeles');
          selectedTimeZone = 'America/Los_Angeles';
        }
        console.log(selectedTimeZone);
        convertPage(selectedTimeZone);
      });
    });
  } else {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
      selectedTimeZone = localStorage.getItem('selectedTimeZone');
      // Only runs on installation
      if (!selectedTimeZone) {
        setTimeZoneState('America/Los_Angeles');
        selectedTimeZone = 'America/Los_Angeles';
      }
      convertPage(selectedTimeZone);
    } else {
      console.log('This browser has no storage support');
      // const currentTimeZone = 'America/Los_Angeles';
      // const selectedTimeZone = 'America/Los_Angeles';
      // convertPage(currentTimeZone, selectedTimeZone);
    }
  }
})();
