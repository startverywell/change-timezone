const { convertValue } = require('../../conversion-functions/convertValue.js');
const { convertPage } = require('../../conversion-functions/convertPage.js');

const queryID = document.getElementById.bind(document);

function togglePopup() {
  if (queryID('optionsDisplay').classList.contains('hidePopUp')) {
    queryID('optionsDisplay').classList.remove('hidePopUp');
    queryID('buttonOpenOptionsDisplayWrapper').style.setProperty('border-radius', '20px 0 0 0px');
  } else {
    queryID('optionsDisplay').classList.add('hidePopUp');
    queryID('buttonOpenOptionsDisplayWrapper').style.setProperty('border-radius', '20px 0 0 20px');
  }
}

// Will need to change this to work with classes not IDs
function toggleDisabledInputs(input_id) {
  if ('radioManualDate' === input_id || 'inputManualDate' === input_id) {
    queryID('radioManualDate').checked = true;

    queryID('inputUiDate').disabled = true;
    queryID('inputManualDate').disabled = false;
  } else {
    queryID('radioUiDate').checked = true;

    queryID('inputManualDate').disabled = true;
    queryID('inputUiDate').disabled = false;
  }
}

function convertInput() {
  // Get input from user
  let input;

  // Manual input or picker
  if (queryID('inputManualDate').value) {
    if (!queryID('inputManualDate').disabled) {
      input = queryID('inputManualDate').value;
    }
  }
  if (queryID('inputUiDate').value) {
    if (!queryID('inputUiDate').disabled) {
      input = queryID('inputUiDate').value;
    }
  }
  console.log(input);

  const fromTimeZone = queryID('selectFromTimeZone').value;
  const toTimeZone = queryID('selectToTimeZone').value;

  const convertedDateTime = convertValue(input, fromTimeZone, toTimeZone);

  if (convertedDateTime) {
    queryID(
      'conversionOutputPlaceholder'
    ).innerHTML = `Conversion results: ${convertedDateTime.dateTime} ${convertedDateTime.zoneName} <br><br> Unix time: ${convertedDateTime.unixTime}`;
  } else {
    queryID(
      'conversionOutputPlaceholder'
    ).innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

module.exports = { togglePopup, toggleDisabledInputs, convertInput, convertPage };
