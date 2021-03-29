const { convertElements } = require('./convertElements.js');
const { setTimeZoneState } = require('../setTimeZoneState.js');
const { getTimeZoneState } = require('../getTimeZoneState.js');

function convertPage(newTimeZone) {
  // Select all TD elemets on page
  const elements = document.body.querySelectorAll('td');
  let currentTimeZone, selectedTimeZone;

  // Convert Page needs to handle the getting of the current page
  // We control this through this flag
  if (PRODUCTION) {
    // on load or on refresh
    chrome.storage.local.get(['currentTimeZone'], function (result) {
      currentTimeZone = result.currentTimeZone;

      // Refresh and not installing for first time
      if (currentTimeZone) {
        console.log('Refresh');
        //currentTimeZone = 'America/Los_Angeles';
        console.log(currentTimeZone, newTimeZone);

        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      } else {
        console.log('Picker');
        currentTimeZone = result.currentTimeZone;
        console.log(currentTimeZone, newTimeZone);
        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      }
      console.log(currentTimeZone, selectedTimeZone);
      convertElements(elements, currentTimeZone, selectedTimeZone);
    });
  } else {
    currentTimeZone = getTimeZoneState().currentTimeZone;
    console.log(currentTimeZone, newTimeZone);
    // Check if there are TD values on the page
    convertElements(elements, currentTimeZone, newTimeZone);
    // Set storage and display options to selected TimeZone
    setTimeZoneState(newTimeZone);
  }
}

module.exports = { convertPage };
