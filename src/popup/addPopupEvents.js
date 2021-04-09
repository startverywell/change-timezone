// Require conversion functions
const { convertValue } = require('../../libs/conversion/convertValue.js');
const { convertPage } = require('../convertPage.js');

// Require Popup functions to add
const { togglePopup, closeAlert, toggleInputs, displayConvertedDateTime } = require('./js/script.js');

// Bind various document functions for querying the DOM
const queryID = document.getElementById.bind(document);

// This function adds the Popup and event listeners to buttons
function addPopupEvents() {
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

  // Conversion calls
  queryID('js-convert-page').onclick = () => {
    convertPage(queryID('js-page-timezone').value);
  };

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
    const convertedDateTime = convertValue(input, fromTimeZone, toTimeZone);

    // Display the converted Date Time
    displayConvertedDateTime(convertedDateTime);
  };
}

export default addPopupEvents;
