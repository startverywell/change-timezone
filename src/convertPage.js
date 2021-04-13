/*
  Checks every element of type td (table data cell) on the current page for a Date Time value
  or Unix Time and converts it to the user's choice
*/
const conversion = require('../libs/conversion/');
const { setTimeZoneState } = require('./setTimeZoneState.js');
const { getTimeZoneState } = require('./getTimeZoneState.js');
const timeZoneRegex = require('../libs/timeZoneRegex.js');

// Change to the target element on the page you want to convert
const ELEMENT_TO_CONVERT = 'td';

function convertPage(newTimeZone) {
  // Select all TD elemets on page
  const elements = document.body.querySelectorAll(ELEMENT_TO_CONVERT);
  let currentTimeZone, selectedTimeZone;

  // Convert Page needs to handle the getting of the current page
  // We control this through this flag
  if (PRODUCTION) {
    // on load or on refresh
    chrome.storage.local.get(['currentTimeZone'], function (result) {
      currentTimeZone = result.currentTimeZone;

      // Refresh and not installing for first time
      if (currentTimeZone) {
        console.log(currentTimeZone, newTimeZone);

        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      } else {
        currentTimeZone = result.currentTimeZone;
        setTimeZoneState(newTimeZone);
        selectedTimeZone = newTimeZone;
      }

      if (elements.length != 0) {
        elements.forEach(function (element) {
          if (timeZoneRegex.hasDateTime(element.innerHTML)) {
            const convertedDateTime = conversion.getDateTimeFromString(
              element.innerHTML,
              currentTimeZone,
              selectedTimeZone
            );
            if (convertedDateTime) {
              element.innerHTML = `${convertedDateTime}`;
            }
          }
        });
      }
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
