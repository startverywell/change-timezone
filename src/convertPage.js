/*
  Checks every element of type td (table data cell) on the current page for a Date Time value
  or Unix Time and converts it to the user's choice
*/
import conversion from '../libs/conversion/';
import toFormattedDateTimeZone from './toFormattedDateTimeZone';
import getStringToReplace from './getStringToReplace.js';
import setTimeZoneState from './setTimeZoneState.js';
import getTimeZoneState from './getTimeZoneState.js';

// Change to the target element on the page you want to convert
const ELEMENT_TO_CONVERT = 'td';

function convertElementsInDom(elements, currentTimeZone, toTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      // Get Unix Time and string to replace in element from element
      const unixTime = conversion.toUnixTime(element.innerHTML, currentTimeZone);
      if (unixTime) {
        // Convert to new Date Time
        const convertedDateTime = toFormattedDateTimeZone(unixTime, toTimeZone);

        // Replace the old Date Time value with the converted one
        const stringToReplace = getStringToReplace(element.innerHTML);

        const updatedElement = element.innerHTML.replace(stringToReplace, convertedDateTime);
        element.innerHTML = `${updatedElement}`;
      }
    });
  }
}

export default function convertPage(newTimeZone) {
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

      convertElementsInDom(elements, currentTimeZone, selectedTimeZone);
    });
  } else {
    currentTimeZone = getTimeZoneState().currentTimeZone;
    // Check if there are TD values on the page
    convertElementsInDom(elements, currentTimeZone, newTimeZone);

    // Set storage and display options to selected TimeZone
    setTimeZoneState(newTimeZone);
  }
}
