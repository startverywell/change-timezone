const conversion = require('../libs/conversion/');
const { setTimeZoneState } = require('./setTimeZoneState.js');
const { getTimeZoneState } = require('./getTimeZoneState.js');

// Gets all elements of a certain type on the page.
// (this might be used in the future if we were to add a way for a user to select the types of elements)
function getElementsToConvert(elementType) {
  const elements = document.body.querySelectorAll(elementType);
  return elements;
}

function convertPage(newTimeZone) {
  // Select all TD elemets on page
  const elements = getElementsToConvert('td');
  let currentTimeZone, selectedTimeZone;

  // Convert Page needs to handle the getting of the current page
  // We control this through this flag
  if (PRODUCTION) {
    // on load or on refresh
    chrome.storage.local.get(['currentTimeZone'], function (result) {
      currentTimeZone = result.currentTimeZone;

      // Refresh and not installing for first time
      if (currentTimeZone) {
        //currentTimeZone = 'America/Los_Angeles';
        console.log(currentTimeZone, newTimeZone);

        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      } else {
        currentTimeZone = result.currentTimeZone;
        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      }
      conversion.convertDomElements(elements, currentTimeZone, selectedTimeZone);
    });
  } else {
    currentTimeZone = getTimeZoneState().currentTimeZone;
    // Check if there are TD values on the page
    conversion.convertDomElements(elements, currentTimeZone, newTimeZone);
    // Set storage and display options to selected TimeZone
    setTimeZoneState(newTimeZone);
  }
}

module.exports = { convertPage };
