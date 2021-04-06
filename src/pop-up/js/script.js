const { convertValue } = require('../../conversion-functions/convertValue.js');
const { convertPage } = require('../../conversion-functions/convertPage.js');

const queryID = document.getElementById.bind(document);

function togglePopup() {
  if (queryID('options-display').classList.contains('hide-timezone-converter')) {
    queryID('options-display').classList.remove('hide-timezone-converter');
    queryID('buttonOpenOptionsDisplayWrapper').style.setProperty('border-radius', '20px 0 0 0px');
  } else {
    queryID('options-display').classList.add('hide-timezone-converter');
    queryID('buttonOpenOptionsDisplayWrapper').style.setProperty('border-radius', '20px 0 0 20px');
  }
}

// Will need to change this to work with classes not IDs
function toggleDisabledInputs(input_id) {
  if ('js-radio-manual-date' === input_id || 'js-input-manual-date' === input_id) {
    queryID('js-radio-manual-date').checked = true;

    queryID('js-input-ui-date').disabled = true;
    queryID('js-input-manual-date').disabled = false;
  } else {
    queryID('js-radio-ui-date').checked = true;

    queryID('js-input-manual-date').disabled = true;
    queryID('js-input-ui-date').disabled = false;
  }
}

function convertInput() {
  // Get input from user
  let input;

  // Manual input or picker
  if (queryID('js-input-manual-date').value) {
    if (!queryID('js-input-manual-date').disabled) {
      input = queryID('js-input-manual-date').value;
    }
  }
  if (queryID('js-input-ui-date').value) {
    if (!queryID('js-input-ui-date').disabled) {
      input = queryID('js-input-ui-date').value;
    }
  }
  console.log(input);

  const fromTimeZone = queryID('js-from-timezone').value;
  const toTimeZone = queryID('js-to-timeZone').value;

  const convertedDateTime = convertValue(input, fromTimeZone, toTimeZone);

  if (convertedDateTime) {
    queryID(
      'js-conversion-output'
    ).innerHTML = `Conversion results: ${convertedDateTime.dateTime} ${convertedDateTime.zoneName} <br><br> Unix time: ${convertedDateTime.unixTime}`;
  } else {
    queryID(
      'js-conversion-output'
    ).innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

module.exports = { togglePopup, toggleDisabledInputs, convertInput, convertPage };
