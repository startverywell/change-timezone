const { convertValue } = require('./convertValue.js');

// Given HTML elements and TimeZones, converts each element to the selected TimeZone
function convertElements(elements, currentTimeZone, selectedTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      const convertedDateTime = convertValue(
        element.innerHTML,
        currentTimeZone,
        selectedTimeZone
      );
      if (convertedDateTime) {
        element.innerHTML = `${convertedDateTime.dateTime} ${convertedDateTime.zoneName}`;
      }
    });
  }
}

module.exports = { convertElements };
