/*
 Takes an array of Document Elements and converts any value described in the getUnixTimeFromString() function
*/
const { getDateTimeFromString } = require('./getDateTimeFromString.js');

function convertDomElements(elements, currentTimeZone, selectedTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      const convertedDateTime = getDateTimeFromString(element.innerHTML, currentTimeZone, selectedTimeZone);
      if (convertedDateTime) {
        element.innerHTML = `${convertedDateTime}`;
      }
    });
  }
}

module.exports = { convertDomElements };
