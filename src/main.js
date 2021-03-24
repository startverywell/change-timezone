(function () {
  const addPopupToDom = require('./popup/pop-up.js').default;
  const runPageConversion = require('./run-page-conversion').default;

  addPopupToDom();

  // Run conversion
  const currentPageTimeZone = 'America/Los_Angeles';
  const toTimeZone = 'Australia/Canberra';

  runPageConversion(
    document.body.querySelectorAll('td'),
    currentPageTimeZone,
    toTimeZone
  );
})();
