(function () {
  const addPopup = require('./pop-up/addPopup.js').default;
  const { convertPage } = require('./conversion-functions/convertPage.js');
  // Add the Popup to the page
  addPopup();
  // If we are bundling in Production, we are working with the Chrome Storage API
  convertPage();
})();
