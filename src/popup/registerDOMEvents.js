// Import conversion library
import conversion from '../conversion';

// Import Popup functions
import { togglePopup, closeAlert, toggleInputs, displayConversion, displayError } from './js/script.js';

/* 
 Adds events for page Popup
*/
(function () {
  // Bind document functions for querying the DOM
  const queryID = document.getElementById.bind(document);

  // Adds event listeners to Popup

  // Convert the entire page
  queryID('js-convert-page').onclick = () => {
    conversion.convertPage(queryID('js-page-timezone').value);
  };

  // Toggle Popup / options display
  queryID('js-open-options').onclick = () => {
    togglePopup();
  };
  queryID('js-close-options').onclick = () => {
    togglePopup();
  };
  queryID('js-close-alert').onclick = () => {
    closeAlert();
  };

  // Add toggle to each input
  const converterInputs = ['js-radio-manual', 'js-radio-picker', 'js-input-manual', 'js-input-picker'];
  converterInputs.forEach((element) => {
    queryID(element).onclick = function () {
      toggleInputs(this.id);
    };
  });

  // Manual conversion
  queryID('js-convert-datetime').onclick = () => {
    // Get Time Zone inputs from user
    const fromTimeZone = queryID('js-from-timezone').value;
    const toTimeZone = queryID('js-to-timeZone').value;
    let input;

    // Get input from user either through the manual input or picker
    if (queryID('js-radio-manual').checked) {
      input = queryID('js-input-manual').value;
    }
    if (queryID('js-radio-picker').checked) {
      input = queryID('js-input-picker').value;
    }

    // Regex input for Unix Time
    let unixTime = /\d{10}/.exec(input);
    // If no Unix Time, convert input to Unix Time
    if (!unixTime) {
      unixTime = conversion.toUnixTime(input, fromTimeZone);
    }

    // If Unix Time, convert Unix Time to the updated Time Zone and display
    if (unixTime) {
      const convertedDateTime = conversion.toDateTimeZone(unixTime, toTimeZone);
      displayConversion(convertedDateTime, unixTime);
    } else {
      displayError();
    }
  };
})();
