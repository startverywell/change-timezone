import options from './popup/html/options.html';
import popupButton from './popup/html/popup.html';
import iconImageURL from './popup/images/tcicon128.png';
import './popup/css/popup.scss';

(function () {
  console.log('Production = ' + PRODUCTION);
  const PAGE_DEFAULT_TIMEZONE = 'America/Los_Angeles';

  // const addPopupDomEvents = require('./popup/addPopupDomEvents.js').default;
  const { convertPage } = require('./convertPage.js');
  const { setTimeZoneState } = require('./setTimeZoneState.js');

  const query = document.querySelector.bind(document);

  // Add the Popup to the page
  const converterTool = document.createElement('div');
  converterTool.innerHTML = popupButton;
  query('body').appendChild(converterTool);

  // Add TimeZone options into the Pop-up for selection
  query('#js-page-timezone').innerHTML = options;
  query('#js-from-timezone').innerHTML = options;
  query('#js-to-timeZone').innerHTML = options;

  // Add event listeners to Popup
  require('./popup/addPopupDomEvents.js');

  // addPopupDomEvents();

  let selectedTimeZone;
  const imgElement = new Image();

  // If we are in production, we are working with the Chrome Storage API, otherwise we use local storage
  // Gets current Time Zone value and converts the page from PT to the selected time
  if (PRODUCTION) {
    // Add image
    imgElement.src = chrome.runtime.getURL('./tcicon128.png');
    chrome.storage.local.set({ currentTimeZone: 'America/Los_Angeles' }, function () {
      chrome.storage.local.get(['selectedTimeZone'], function (result) {
        selectedTimeZone = result.selectedTimeZone;
        // Only runs on installation / defaults to PT time
        if (!selectedTimeZone) {
          setTimeZoneState('America/Los_Angeles');
          selectedTimeZone = 'America/Los_Angeles';
        }
        convertPage(selectedTimeZone);
      });
    });
  } else {
    // Add image
    imgElement.src = iconImageURL;
    localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
    selectedTimeZone = localStorage.getItem('selectedTimeZone');
    // Only runs on installation / defaults to PT time
    if (!selectedTimeZone) {
      setTimeZoneState('America/Los_Angeles');
      selectedTimeZone = 'America/Los_Angeles';
    }
    convertPage(selectedTimeZone);
  }
  // Add image to Popup
  query('#js-open-options').appendChild(imgElement);
})();
