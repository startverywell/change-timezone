import options from './html/options.html';
import popupButton from './html/pop-up.html';
import iconImage from './images/tcicon128.png';
import './css/pop-up.scss';

// For unit tests they can't be ES6 imports/exports
const { togglePopup, toggleInputs, convertInput, convertPage } = require('./js/script.js');

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
  imgElement.src = iconImage;
  console.log(imgElement);
  console.log(iconImage);
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

  // Add convert button for manual conversion
  queryID('js-convert-datetime').onclick = () => {
    convertInput();
  };

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  queryID('js-page-timezone').addEventListener('change', (event) => {
    convertPage(event.target.value);
  });
}

export default addPopup;
