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

function convertInput() {
  // Get input from user
  const input = query('.tzc-input').value;
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

module.exports = { togglePopup, convertInput, convertPage };
