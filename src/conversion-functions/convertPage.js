const { convertElements } = require('./convertElements.js');
const { setTimeZoneState } = require('../setTimeZoneState.js');
const { getTimeZoneState } = require('../getTimeZoneState.js');

// Converts page with TD elements to selected TimeZone
function convertPage(selectedTimeZone) {
  // Select all TD elemets on page
  // TODO: Hard coding TD element types. I would like to be able to have a way for the user to select or automatically detect on page.
  const elements = document.body.querySelectorAll('td');

  // Convert Page needs to handle the getting of the current page
  // We control this through this flag
  if (PRODUCTION) {
    chrome.storage.local.get(['currentTimeZone'], function (result) {
      let { currentTimeZone } = result;
      console.log(currentTimeZone, selectedTimeZone);
      convertElements(elements, currentTimeZone, selectedTimeZone);

      chrome.storage.local.set({ currentTimeZone: selectedTimeZone }, function () {});
    });
  } else {
    const { currentTimeZone } = getTimeZoneState();
    // Check if there are TD values on the page
    convertElements(elements, currentTimeZone, selectedTimeZone);
    // Set storage and display options to selected TimeZone
    setTimeZoneState(selectedTimeZone);
  }
}

module.exports = { convertPage };
