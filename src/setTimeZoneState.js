function setTimeZoneState(selectedTimeZone) {
  if (PRODUCTION) {
    chrome.storage.local.set({ currentTimeZone: selectedTimeZone, selectedTimeZone: selectedTimeZone }, function () {});
  } else {
    localStorage.setItem('currentTimeZone', selectedTimeZone);
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
  }
  document.getElementById('selectPageTimeZone').value = selectedTimeZone;
  document.getElementById('selectToTimeZone').value = selectedTimeZone;
}

module.exports = { setTimeZoneState };
