function setTimeZoneState(selectedTimeZone) {
  if (PRODUCTION) {
    chrome.storage.local.set({ currentTimeZone: selectedTimeZone, selectedTimeZone: selectedTimeZone }, function () {});
  } else {
    localStorage.setItem('currentTimeZone', selectedTimeZone);
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
  }
  document.getElementById('js-page-timezone').value = selectedTimeZone;
}

module.exports = { setTimeZoneState };
