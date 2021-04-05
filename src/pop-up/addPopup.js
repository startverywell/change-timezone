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
  queryID('buttonOpenOptionsDisplay').appendChild(myIcon);

  // Add TimeZone options into the Pop-up for selection
  queryID('selectPageTimeZone').innerHTML = options;
  queryID('selectFromTimeZone').innerHTML = options;
  queryID('selectToTimeZone').innerHTML = options;

  // Toggle Popup / options display
  queryID('buttonOpenOptionsDisplay').onclick = togglePopup;
  queryID('buttonCloseOptionsDisplay').onclick = togglePopup;

  // Toggle disabled checkbox
  queryID('radioManualDate').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('radioUiDate').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('inputManualDate').onclick = function () {
    toggleDisabledInputs(this.id);
  };
  queryID('inputUiDate').onclick = function () {
    toggleDisabledInputs(this.id);
  };

  // Add convert button for manual conversion
  queryID('buttonConvert').onclick = convertInput;

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  queryID('selectPageTimeZone').addEventListener('change', (event) => {
    convertPage(event.target.value);
  });
}

export default addPopup;
