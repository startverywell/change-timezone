/*
  Checks every element of type td (table data cell) on the current page for a Date Time value
  or Unix Time and converts it to the user's choice
*/
import conversion from '..';
import getContentToReplace from './getContentToReplace';
import setTimeZonePref from '../../setTimeZonePref.js';
import getTimeZonePref from '../../getTimeZonePref.js';

// Change to the target element on the page you want to convert
const ELEMENT_TO_CONVERT = 'td';

function convertElementsInDom(elements, currentTimeZone, toTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      // Get Unix Time and string to replace in element from element
      const unixTime = conversion.toUnixTime(element.innerHTML, currentTimeZone);
      if (unixTime) {
        // Get the string in the element that will be replaced
        const stringToReplace = getContentToReplace(element.innerHTML);

        // Convert to new Date Time
        const convertedDateTime = conversion.toDateTimeZone(unixTime, toTimeZone);

        // Find replace on the content in the element
        const updatedElement = element.innerHTML.replace(stringToReplace, convertedDateTime);

        // Update the content to the new content
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
        setTimeZonePref(newTimeZone);
        selectedTimeZone = newTimeZone;
      } else {
        currentTimeZone = result.currentTimeZone;
        setTimeZonePref(newTimeZone);
        selectedTimeZone = newTimeZone;
      }

      convertElementsInDom(elements, currentTimeZone, selectedTimeZone);
    });
  } else {
    currentTimeZone = getTimeZonePref().currentTimeZone;
    // Check if there are TD values on the page
    convertElementsInDom(elements, currentTimeZone, newTimeZone);

    // Set storage and display options to selected TimeZone
    setTimeZonePref(newTimeZone);
  }
}
