const { convertValue } = require('../../conversion-functions/convertValue.js');
const { convertPage } = require('../../conversion-functions/convertPage.js');

const query = document.querySelector.bind(document);

function togglePopup() {
  if (query('.tzc-options-display').classList.contains('tzc-hidePopup')) {
    query('.tzc-options-display').classList.remove('tzc-hidePopup');
    query('.tzc-button-wrapper').style.setProperty('border-radius', '20px 0 0 0px');
  } else {
    query('.tzc-options-display').classList.add('tzc-hidePopup');
    query('.tzc-button-wrapper').style.setProperty('border-radius', '20px 0 0 20px');
  }
}

function toggleDisabled(input_id) {
  if ('tzc-input-manual' === input_id || 'tzc-input' === input_id) {
    query('#tzc-picker').disabled = true;
    query('#tzc-input').disabled = false;
    query('#tzc-input-manual').checked = true;
  }

  if ('tzc-input-picker' === input_id || 'tzc-picker' === input_id) {
    query('#tzc-picker').disabled = false;
    query('#tzc-input').disabled = true;
    query('#tzc-input-picker').checked = true;
  }
}

function convertInput() {
  // Get input from user
  let input;

  // Manual input or picker
  if (query('.tzc-input').value) {
    input = query('.tzc-input').value;
  }
  if (query('.tzc-picker').value) {
    input = query('.tzc-picker').value;
  }

  const fromTimeZone = query('.tzc-from-tz').value;
  const toTimeZone = query('.tzc-to-tz').value;

  const convertedDateTime = convertValue(input, fromTimeZone, toTimeZone);

  if (convertedDateTime) {
    query(
      '.tzc-output-placeholder'
    ).innerHTML = `Conversion results: ${convertedDateTime.dateTime} ${convertedDateTime.zoneName} <br><br> Unix time: ${convertedDateTime.unixTime}`;
  } else {
    query(
      '.tzc-output-placeholder'
    ).innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

module.exports = { togglePopup, toggleDisabled, convertInput, convertPage };
