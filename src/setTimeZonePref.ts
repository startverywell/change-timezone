/*
 Sets Time Zone in Chrome storage (production) or Local storage (dev) 
*/
export default function setTimeZonePref(selectedTimeZone: string) {
  // @ts-ignore
  if (PRODUCTION) {
    // @ts-ignore
    chrome.storage.local.set({ currentTimeZone: selectedTimeZone, selectedTimeZone: selectedTimeZone }, function () {});
  } else {
    localStorage.setItem('currentTimeZone', selectedTimeZone);
    localStorage.setItem('selectedTimeZone', selectedTimeZone);
  }
  // Updates page select Time Zone value
  (<HTMLInputElement>document.getElementById('js-page-timezone')).value = selectedTimeZone;
  (<HTMLInputElement>document.getElementById('js-from-timezone')).value = selectedTimeZone;
}
