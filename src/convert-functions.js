const regex = require('./regex.js');

const momentInterface = require('./moment-interface.js');

function convertToUnixTime(input, currentTimeZone) {
  let unixTime;

  if (regex.hasUnixTime(input)) {
    unixTime = regex.getUnixTime(input);
  }

  if (regex.hasDateTime(input)) {
    const dateValueFromInput = regex.getDateTime(input);

    unixTime = momentInterface.convertDateTimeWithZoneNameToUnixTime(
      dateValueFromInput,
      currentTimeZone
    );
  }

  return unixTime;
}

function convertUnixTimeToNewDateTime(unixTime, selectedTimeZone) {
  const toDateTime = momentInterface.convertTimeStampToDate(
    unixTime,
    selectedTimeZone
  );
  const zoneName = momentInterface.getZoneName(selectedTimeZone);

  return {
    dateTime: toDateTime,
    zoneName: zoneName,
    unixTime: unixTime.toString(),
  };
}

function convertInputToNewTimeZone(input, currentTimeZone, selectedTimeZone) {
  const unixTime = convertToUnixTime(input, currentTimeZone);

  const convertedDateTime = convertUnixTimeToNewDateTime(
    unixTime,
    selectedTimeZone
  );

  return convertedDateTime;
}

function convertElementsOnAPage(elements, currentTimeZone, selectedTimeZone) {
  if (elements.length != 0) {
    elements.forEach(function (element) {
      if (regex.hasDateTime(element.innerHTML)) {
        const convertedDateTime = convertInputToNewTimeZone(
          element.innerHTML,
          currentTimeZone,
          selectedTimeZone
        );
        element.innerHTML = `${convertedDateTime.dateTime} ${convertedDateTime.zoneName}`;
      }
    });
  }
}

function convertPage(currentTimeZone, selectedTimeZone) {
  // Select all TD elemets on page
  // TODO: Hard coding TD element types. I would like to be able to have a way for the user to select or automatically detect on page.
  const elements = document.body.querySelectorAll('td');

  // Check if there are TD values on the page
  convertElementsOnAPage(elements, currentTimeZone, selectedTimeZone);
  // Set storage and display options to selected TimeZone
  localStorage.setItem('currentTimeZone', selectedTimeZone);
  localStorage.setItem('selectedTimeZone', selectedTimeZone);
  document.getElementById('tzc-full-list').value = selectedTimeZone;
  document.getElementById('tzc-to-tz').value = selectedTimeZone;
}

module.exports = { convertInputToNewTimeZone, convertPage };
