// Bind various document functions for querying the DOM
const queryID = document.getElementById.bind(document);

// Show / Hide the Popup
function togglePopup() {
  if (queryID('options-display').classList.contains('hide-timezone-element')) {
    queryID('options-display').classList.remove('hide-timezone-element');
    queryID('open-options-wrapper').style.setProperty('border-radius', '20px 0 0 0px');
  } else {
    queryID('options-display').classList.add('hide-timezone-element');
    queryID('open-options-wrapper').style.setProperty('border-radius', '20px 0 0 20px');
  }
}

// Close alert when conversion fails
function closeAlert() {
  queryID('js-conversion-alert').classList.add('hide-timezone-element');
}

// Disable / Enable inputs
function toggleInputs(input_id) {
  if ('js-radio-manual' === input_id || 'js-input-manual' === input_id) {
    queryID('js-radio-manual').checked = true;
    queryID('js-input-manual').disabled = false;

    // Disable picker input
    // queryID('js-input-picker').disabled = true;
    queryID('js-input-picker').style.backgroundColor = '#d3d3d3';
    queryID('js-input-manual').style.backgroundColor = '#fff';
  } else {
    queryID('js-radio-picker').checked = true;
    queryID('js-input-picker').disabled = false;

    // Disable manual input
    // queryID('js-input-manual').disabled = true;
    queryID('js-input-manual').style.backgroundColor = '#d3d3d3';
    queryID('js-input-picker').style.backgroundColor = '#fff';
  }
}

// Converts a given input and Time Zone to a new Time Zone and displays the result
function displayConvertedDateTime(convertedDateTime) {
  // Output results
  if (convertedDateTime) {
    queryID('js-conversion-output').classList.remove('hide-timezone-element');
    queryID(
      'js-conversion-output'
    ).innerHTML = `<label>&#9989;</label> <h3>Conversion results: </h3> <h2>${convertedDateTime.dateTime} ${convertedDateTime.zoneName}</h2> <h4>Timestamp: ${convertedDateTime.unixTime}</h4>`;
  } else {
    queryID('js-conversion-output').classList.add('hide-timezone-element');
    queryID('js-conversion-alert').classList.remove('hide-timezone-element');
  }
}

module.exports = { togglePopup, closeAlert, toggleInputs, displayConvertedDateTime };
