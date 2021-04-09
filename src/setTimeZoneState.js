/*
 Sets Time Zone in Chrome storage (production) or Local storage (dev) 
*/
function setTimeZoneState(selectedTimeZone) {
  if (PRODUCTION) {
    chrome.storage.local.set({ currentTimeZone: selectedTimeZone, selectedTimeZone: selectedTimeZone }, function () {});
  } else {
    localStorage.setItem('currentTimeZone', selectedTimeZone);
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
  }
  // Updates page select Time Zone value
  document.getElementById('js-page-timezone').value = selectedTimeZone;
}

module.exports = { setTimeZoneState };
