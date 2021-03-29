function setTimeZoneState(selectedTimeZone) {
  if (PRODUCTION) {
    chrome.storage.local.set({ currentTimeZone: selectedTimeZone, selectedTimeZone: selectedTimeZone }, function () {});
  } else {
    localStorage.setItem('currentTimeZone', selectedTimeZone);
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
  }
  document.getElementById('tzc-full-list').value = selectedTimeZone;
  document.getElementById('tzc-to-tz').value = selectedTimeZone;
}

module.exports = { setTimeZoneState };
