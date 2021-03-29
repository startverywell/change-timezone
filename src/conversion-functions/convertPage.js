const { convertElements } = require('./convertElements.js');
const { setTimeZoneState } = require('../setTimeZoneState.js');
const { getTimeZoneState } = require('../getTimeZoneState.js');

function convertPage(newTimeZone) {
  // Select all TD elemets on page
  // TODO: Hard coding TD element types. I would like to be able to have a way for the user to select or automatically detect on page.
  const elements = document.body.querySelectorAll('td');

  // Convert Page needs to handle the getting of the current page
  // We control this through this flag
  if (PRODUCTION) {
    if (!newTimeZone) {
      chrome.storage.local.get(['currentTimeZone', 'selectedTimeZone'], function (result) {
        let { currentTimeZone, selectedTimeZone } = result;

        if (currentTimeZone) {
          chrome.storage.local.set({ currentTimeZone: 'America/Los_Angeles' }, function () {
            console.log(currentTimeZone, selectedTimeZone);
            convertElements(elements, currentTimeZone, selectedTimeZone);

            chrome.storage.local.set({ currentTimeZone: selectedTimeZone }, function () {});
          });
        }
        // Only runs on installation
        if (!selectedTimeZone) {
          currentTimeZone = 'America/Los_Angeles';
          selectedTimeZone = 'America/Los_Angeles';
          chrome.storage.local.set({ currentTimeZone, selectedTimeZone }, function () {
            console.log(currentTimeZone, selectedTimeZone);
            convertElements(elements, currentTimeZone, selectedTimeZone);

            chrome.storage.local.set({ currentTimeZone: selectedTimeZone }, function () {});
          });
        }
      });
    } else {
      chrome.storage.local.get(['currentTimeZone'], function (result) {
        let { currentTimeZone } = result;
        convertElements(elements, currentTimeZone, newTimeZone);

        chrome.storage.local.set({ currentTimeZone: newTimeZone }, function () {});
      });
    }
  } else {
    console.log('Production = ' + PRODUCTION);
    console.log('Using LocalStorage');
    if (!newTimeZone) {
      if (typeof Storage !== 'undefined') {
        localStorage.setItem('currentTimeZone', 'America/Los_Angeles');
        if (!localStorage.getItem('selectedTimeZone')) {
          localStorage.setItem('selectedTimeZone', 'America/Los_Angeles');
        }

        const { currentTimeZone } = getTimeZoneState();
        // Check if there are TD values on the page
        convertElements(elements, currentTimeZone, 'America/Los_Angeles');
        // Set storage and display options to selected TimeZone
        setTimeZoneState('America/Los_Angeles');
      } else {
        console.log('This browser has no storage support');
        // const currentTimeZone = 'America/Los_Angeles';
        // const selectedTimeZone = 'America/Los_Angeles';
        // convertPage(currentTimeZone, selectedTimeZone);
      }
    } else {
      // Need to fix what's being set for selected vs current
      if (typeof Storage !== 'undefined') {
        const { currentTimeZone } = getTimeZoneState();
        console.log(currentTimeZone, newTimeZone);
        // Check if there are TD values on the page
        convertElements(elements, currentTimeZone, newTimeZone);
        // Set storage and display options to selected TimeZone
        setTimeZoneState(newTimeZone);
      } else {
        console.log('This browser has no storage support');
        // const currentTimeZone = 'America/Los_Angeles';
        // const selectedTimeZone = 'America/Los_Angeles';
        // convertPage(currentTimeZone, selectedTimeZone);
      }
    }
  }
}

module.exports = { convertPage };
