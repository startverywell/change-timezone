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
function displayConversion(dateTime, unixTime) {
  // Output results
  if (dateTime && unixTime) {
    const dateTimeSplit = dateTime.split(' ');
    const dateSplit = dateTimeSplit[0].split('-');

    // TODO: re work the below to be the same splitting as the date above
    const dt = new Date(`${dateTimeSplit[0]} ${dateTimeSplit[1]}`);
    let hours = dt.getHours();
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    const minutes = dt.getMinutes();
    const finalTime = `${hours}:${minutes} ${AmOrPm}`;

    const finalDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
    queryID('js-conversion-output').classList.remove('hide-timezone-element');
    queryID(
      'js-conversion-output'
    ).innerHTML = `<label>&#9989;</label> <h3>Conversion results: ${finalDate}, ${finalTime} ${dateTimeSplit[2]} </h3> <p> <h2>${dateTime}</h2></p> <h4>Timestamp: ${unixTime}</h4>`;
  } else {
    queryID('js-conversion-output').classList.add('hide-timezone-element');
    queryID('js-conversion-alert').classList.remove('hide-timezone-element');
  }
}

module.exports = { togglePopup, closeAlert, toggleInputs, displayConversion };
