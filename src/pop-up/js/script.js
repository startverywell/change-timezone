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
    queryID('js-conversion-output').style.backgroundColor = 'white';
    queryID(
      'js-conversion-output'
    ).innerHTML = `<h2>✅ Conversion results: </h2> <p><label>Date Time:</label> <br /><b>${convertedDateTime.dateTime} ${convertedDateTime.zoneName}</b> <br /><label>Timestamp:</label><br /> <b>${convertedDateTime.unixTime}</b></p>`;
  } else {
    queryID('js-conversion-output').style.backgroundColor = '#FFCC00';
    queryID(
      'js-conversion-output'
    ).innerHTML = `<h2>❌ Error: </h2> <p> Unfortunately only certain formats are supported (\`YYYY-MM-DD HH:MM:SS\` or Unix Timestamp).</p> <p>Please use the Date & Time Picker above or paste a message link containing a Timestamp</p>`;
  }
  queryID('js-conversion-output').classList.remove('hide-timezone-element');
}

module.exports = { togglePopup, toggleInputs, displayConvertedDateTime };
