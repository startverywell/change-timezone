const convertInputFromUser = require('../../convert-input-from-user');

function toggleTZConverterPopup() {
  console.log('run');
  if (query('#tzc-options-display').classList.contains('hidden')) {
    query('#tzc-options-display').classList.remove('hidden');
  } else {
    query('#tzc-options-display').classList.add('hidden');
  }
}

function manualConvert() {
  // Get input from user
  const fromTimeZone = query('#tzc-from-tz').value;
  const toTimeZone = query('#tzc-to-tz').value;
  const userInput = query('#tzc-input').value;

  const data = convertInputFromUser(userInput, fromTimeZone, toTimeZone);

  const outputPlaceholder = query('#tzc-output-placeholder');
  if (data) {
    outputPlaceholder.innerHTML = `Conversion results: ${data.toDate} ${data.toTimeZoneName} <br><br> Unix time: ${data.unixFormat}`;
  } else {
    outputPlaceholder.innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

export { toggleTZConverterPopup, manualConvert };
