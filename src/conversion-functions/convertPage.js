const { convertElements } = require('./convertElements.js');

// Converts page with TD elements to selected TimeZone
function convertPage(currentTimeZone, selectedTimeZone) {
  // Select all TD elemets on page
  // TODO: Hard coding TD element types. I would like to be able to have a way for the user to select or automatically detect on page.
  const elements = document.body.querySelectorAll('td');

  // Check if there are TD values on the page
  convertElements(elements, currentTimeZone, selectedTimeZone);
  // Set storage and display options to selected TimeZone
  localStorage.setItem('currentTimeZone', selectedTimeZone);
  localStorage.setItem('selectedTimeZone', selectedTimeZone);
  document.getElementById('tzc-full-list').value = selectedTimeZone;
  document.getElementById('tzc-to-tz').value = selectedTimeZone;
}

module.exports = { convertPage };
