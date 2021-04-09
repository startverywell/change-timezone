/* 
 Adds events for page Popup
*/
(function () {
  // Import conversion library
  const conversion = require('../../libs/conversion');

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
    // Get input from user either through the manual input or picker
    if (queryID('js-radio-manual').checked) {
      input = queryID('js-input-manual').value;
    }
    if (queryID('js-radio-picker').checked) {
      input = queryID('js-input-picker').value;
    }

    // Convert input value to new Time Zone
    const convertedDateTime = conversion.getDateTimeFromString(input, fromTimeZone, toTimeZone);
    const convertedUnixTime = conversion.getUnixTimeFromString(input, fromTimeZone);

    // Display the converted Date Time
    displayConversion(convertedDateTime, convertedUnixTime);
  };
  // }
})();
