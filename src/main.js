import options from './popup/html/options.html';
import popupButton from './popup/html/popup.html';
import iconImageURL from './popup/images/tcicon128.png';
import './popup/css/popup.scss';

(function () {
  const addPopupEvents = require('./popup/addPopupEvents.js').default;
  const { convertPage } = require('./conversion-functions/convertPage.js');
  const { setTimeZoneState } = require('./setTimeZoneState.js');

  const query = document.querySelector.bind(document);
  // Add the Popup to the page
  const referenceNode = query('body');
  const converterTool = document.createElement('div');

  converterTool.innerHTML = popupButton;

  referenceNode.appendChild(converterTool);
  // Add TimeZone options into the Pop-up for selection
  query('#js-page-timezone').innerHTML = options;
  query('#js-from-timezone').innerHTML = options;
  query('#js-to-timeZone').innerHTML = options;

  // Add event listeners to Popup
  addPopupEvents();

  // If we are bundling in Production, we are working with the Chrome Storage API
  // Change to do initial check for installation, then pass the "selectedTimeZone" so I don't have to check it on the convertPage
  let selectedTimeZone;

  const imgElement = new Image();

  console.log('Production = ' + PRODUCTION);
  if (PRODUCTION) {
    imgElement.src = chrome.runtime.getURL('./tcicon128.png');
    chrome.storage.local.set({ currentTimeZone: 'America/Los_Angeles' }, function () {
      chrome.storage.local.get(['selectedTimeZone'], function (result) {
        selectedTimeZone = result.selectedTimeZone;
        // Only runs on installation
        if (!selectedTimeZone) {
          console.log('Installation');
          setTimeZoneState('America/Los_Angeles');
          selectedTimeZone = 'America/Los_Angeles';
        }
        console.log(selectedTimeZone);
        convertPage(selectedTimeZone);
      });
    });
  } else {
    imgElement.src = iconImageURL;
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
      selectedTimeZone = localStorage.getItem('selectedTimeZone');
      // Only runs on installation
      if (!selectedTimeZone) {
        setTimeZoneState('America/Los_Angeles');
        selectedTimeZone = 'America/Los_Angeles';
      }
      convertPage(selectedTimeZone);
    } else {
      console.log('This browser has no storage support');
      // const currentTimeZone = 'America/Los_Angeles';
      // const selectedTimeZone = 'America/Los_Angeles';
      // convertPage(currentTimeZone, selectedTimeZone);
    }
  }
  query('#js-open-options').appendChild(imgElement);
})();
