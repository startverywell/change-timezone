/* 
 Adds events for page Popup
*/
(function () {
  // Import conversion library
  const conversion = require('../../libs/conversion');

  // TODO: refactor the below into the above library
  const timeZoneRegex = require('../../libs/timeZoneRegex.js');

  // Import custom page conversion function
  const { convertPage } = require('../convertPage.js');

  // Import Popup functions
  const { togglePopup, closeAlert, toggleInputs, displayConversion } = require('./js/script.js');

  // Bind various document functions for querying the DOM
  const queryID = document.getElementById.bind(document);

  // Adds event listeners to Popup
  // function addPopupDomEvents() {
  // Convert page
  queryID('js-convert-page').onclick = () => {
    convertPage(queryID('js-page-timezone').value);
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
    // Get input from user
    const fromTimeZone = queryID('js-from-timezone').value;
    const toTimeZone = queryID('js-to-timeZone').value;
    let input;
    let unixTime;
    let convertedDateTime;
    // Get input from user either through the manual input or picker
    if (queryID('js-radio-manual').checked) {
      input = queryID('js-input-manual').value;
    }
    if (queryID('js-radio-picker').checked) {
      input = queryID('js-input-picker').value;
    }

    // Convert input value to new Time Zone
    // TODO: Possibly pull this out to it's own function so that it can be easily updated for other datetime formats
    unixTime = timeZoneRegex.getUnixTime(input);
    if (unixTime) {
      convertedDateTime = conversion.getConvertedDateTime(unixTime, toTimeZone);
    } else {
      unixTime = conversion.getUnixTime(input, fromTimeZone);
      convertedDateTime = conversion.getConvertedDateTime(unixTime, toTimeZone);
    }

    // Display the converted Date Time
    displayConversion(convertedDateTime, unixTime);
  };
  // }
})();
