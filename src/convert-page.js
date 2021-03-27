const momentInterface = require('./moment-interface.js');
const regex = require('./regex');

// Run conversion
function convertPage(currentTimeZone, selectedTimeZone) {
  // Select all TD elemets on page
  // TODO: Hard coding TD element types. I would like to be able to have a way for the user to select or automatically detect on page.
  const elements = document.body.querySelectorAll('td');

  // Check if there are TD values on the page
  if (elements.length != 0) {
    elements.forEach(function (element) {
      // Check if the element has a Date Time value
      if (regex.hasDateTime(element.innerHTML)) {
        // Get the Date Time value
        const dateTime = regex.getDateTime(element.innerHTML);
        // Convert the Date Time value from the current TimeZone of the page into the selected TimeZone
        const updatedDateTime = momentInterface.convertDateTimeToNewTimeZone(
          dateTime,
          currentTimeZone,
          selectedTimeZone
        );
        // Get the ZoneName abbreviation
        const zoneName = momentInterface.getZoneName(selectedTimeZone);

        // Update the element with the converted Date Time and ZoneName
        element.innerHTML = `${updatedDateTime} ${zoneName}`;
      }
    });
  }
  // Set storage and display options to selected TimeZone
  localStorage.setItem('currentTimeZone', selectedTimeZone);
  localStorage.setItem('selectedTimeZone', selectedTimeZone);
  document.getElementById('tzc-full-list').value = selectedTimeZone;
  document.getElementById('tzc-to-tz').value = selectedTimeZone;
}

export default convertPage;
