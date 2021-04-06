import options from './html/options.html';
import popupButton from './html/pop-up.html';
import popupCSS from './css/pop-up.scss';
import icon from './images/tcicon128.png';

// For unit tests they can't be ES6 imports/exports
const { togglePopup, toggleDisabledInputs, convertInput, convertPage } = require('./js/script.js');

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
  const myIcon = new Image();
  myIcon.src = icon;
  queryID('js-open-options').appendChild(myIcon);

  // Add TimeZone options into the Pop-up for selection
  queryID('js-page-timezone').innerHTML = options;
  queryID('js-from-timezone').innerHTML = options;
  queryID('js-to-timeZone').innerHTML = options;

  // Toggle Popup / options display
  queryID('js-open-options').onclick = togglePopup;
  queryID('js-close-options').onclick = togglePopup;

  // Toggle disabled checkbox
  queryID('js-radio-manual-date').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('js-radio-ui-date').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('js-input-manual-date').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('js-input-ui-date').onclick = function () {
    toggleDisabledInputs(this.id);
  };

  // Add convert button for manual conversion
  queryID('js-convert-datetime').onclick = convertInput;

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  queryID('js-page-timezone').addEventListener('change', (event) => {
    convertPage(event.target.value);
  });
}

export default addPopup;
