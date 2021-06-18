import options from './popup/html/options.html';
import popupButton from './popup/html/popup.html';
import iconImageURL from './popup/images/tcicon128.png';
import './popup/css/popup.scss';
import { convertPage } from './conversion';

import setTimeZonePref from './setTimeZonePref';

(function () {
  const PAGE_DEFAULT_TIMEZONE = 'America/Los_Angeles';
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
  require('./popup/registerDOMEvents.js');

  let selectedTimeZone;
  const imgElement = new Image();

  // If we are in production, we are working with the Chrome Storage API, otherwise we use local storage
  // Gets current Time Zone value and converts the page from PT to the selected time
  if (PRODUCTION) {
    // Add image
    imgElement.src = chrome.runtime.getURL('./tcicon128.png');
    chrome.storage.local.set({ currentTimeZone: PAGE_DEFAULT_TIMEZONE }, function () {
      chrome.storage.local.get(['selectedTimeZone'], function (result) {
        selectedTimeZone = result.selectedTimeZone;
        // Only runs on installation / defaults to PT time
        if (!selectedTimeZone) {
          setTimeZonePref(PAGE_DEFAULT_TIMEZONE);
          selectedTimeZone = PAGE_DEFAULT_TIMEZONE;
        }
        convertPage(selectedTimeZone);
      });
    });
  } else {
    // Add image
    imgElement.src = iconImageURL;
    localStorage.setItem('currentTimeZone', PAGE_DEFAULT_TIMEZONE);
    selectedTimeZone = localStorage.getItem('selectedTimeZone');
    // Only runs on installation / defaults to PT time
    if (!selectedTimeZone) {
      setTimeZonePref(PAGE_DEFAULT_TIMEZONE);
      selectedTimeZone = PAGE_DEFAULT_TIMEZONE;
    }
    convertPage(selectedTimeZone);
  }
  // Add image to Popup
  query('#js-open-options').appendChild(imgElement);
})();
