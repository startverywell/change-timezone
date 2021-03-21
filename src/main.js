(function () {
  const runPageConversion = require('./run-conversion').default;

  const ptTimeZone = 'America/Los_Angeles';
  const currentPageTimeZone = 'America/Los_Angeles';
  const toTimeZone = 'Australia/Canberra';

  runPageConversion(
    document.body.querySelectorAll('td'),
    currentPageTimeZone,
    toTimeZone
  );
})();
