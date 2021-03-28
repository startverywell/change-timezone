const regex = require('../regex/regex.js');
const { convertValue } = require('./convertValue.js');
const { convertToUnix } = require('./convertToUnix.js');

// Given HTML elements and TimeZones, converts each element to the selected TimeZone
function convertElements(elements, currentTimeZone, selectedTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      if (
        regex.hasDateTime(element.innerHTML) ||
        regex.hasUnixTime(element.innerHTML)
      ) {
        let unixTime;
        if (regex.hasUnixTime(element.innerHTML)) {
          unixTime = regex.getUnixTime(element.innerHTML);
        }

        if (regex.hasDateTime(element.innerHTML)) {
          const dateValueFromInput = regex.getDateTime(element.innerHTML);
          unixTime = convertToUnix(dateValueFromInput, currentTimeZone);
        }
        console.log('converted unixTime = ' + unixTime);
        const convertedDateTime = convertValue(unixTime, selectedTimeZone);
        element.innerHTML = `${convertedDateTime.dateTime} ${convertedDateTime.zoneName}`;
      }
    });
  }
}

module.exports = { convertElements };
