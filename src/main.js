(function () {
  const query = document.querySelector.bind(document);

  // Import conversion function
  const runPageConversion = require('./run-page-conversion').default;

  // Import popup button HTML, CSS and JS
  const {
    tzcPopupButton,
    tzcPopupCSS,
    toggleTZConverterPopup,
    testconversion,
  } = require('./popup/page-pop-up');

  // Add CSS
  const head = query('head');
  const css = document.createElement('style');
  css.innerHTML = tzcPopupCSS;

  head.appendChild(css);

  // Add popup button
  const referenceNode = query('body');
  const converterTool = document.createElement('div');
  converterTool.innerHTML = tzcPopupButton;

  referenceNode.appendChild(converterTool);

  query('#tzc-open-button').onclick = toggleTZConverterPopup;
  query('#tzc-close-options-button').onclick = toggleTZConverterPopup;

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  const selectTimeZone = query('#tzc-full-list');

  selectTimeZone.addEventListener('change', (event) => {
    runPageConversion(
      document.body.querySelectorAll('td'),
      currentPageTimeZone,
      event.target.value
    );
  });

  // Run conversion
  const currentPageTimeZone = 'America/Los_Angeles';
  const toTimeZone = 'Australia/Canberra';

  runPageConversion(
    document.body.querySelectorAll('td'),
    currentPageTimeZone,
    toTimeZone
  );
})();
