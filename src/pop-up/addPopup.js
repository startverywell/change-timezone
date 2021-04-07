import options from './html/options.html';
import popupButton from './html/pop-up.html';
import iconImageURL from './images/tcicon128.png';
import './css/pop-up.scss';

const { convertValue } = require('../conversion-functions/convertValue.js');
const { convertPage } = require('../conversion-functions/convertPage.js');

// For unit tests they can't be ES6 imports/exports
const { togglePopup, toggleInputs, displayConvertedDateTime } = require('./js/script.js');

// Bind various document functions for querying the DOM
const query = document.querySelector.bind(document);
const queryID = document.getElementById.bind(document);

// This function adds the popup and event listeners to buttons
function addPopup() {
  // Add "pop up" button to the body of page
  const referenceNode = query('body');
  const converterTool = document.createElement('div');
  converterTool.innerHTML = popupButton;

  referenceNode.appendChild(converterTool);

  // Add icon
  const imgElement = new Image();
  if (PRODUCTION) {
    imgElement.src = chrome.runtime.getURL('./tcicon128.png');
  } else {
    imgElement.src = iconImageURL;
  }

  queryID('js-open-options').appendChild(imgElement);

  // Add TimeZone options into the Pop-up for selection
  queryID('js-page-timezone').innerHTML = options;
  queryID('js-from-timezone').innerHTML = options;
  queryID('js-to-timeZone').innerHTML = options;

  // Toggle Popup / options display
  queryID('js-open-options').onclick = () => {
    togglePopup();
  };
  queryID('js-close-options').onclick = () => {
    togglePopup();
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

export default addPopup;
