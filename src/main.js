import optionsHTML from './popup/options.html';
import tzcPopupCSSCSS from './popup/tzcPopup.css';
import tzcPopupHTML from './popup/tzcPopup.html';

(function () {
  // Import conversion function
  const runPageConversion = require('./run-page-conversion').default;

  // Import popup button HTML, CSS and JS

  const { toggleTZConverterPopup } = require('./popup/page-pop-up');

  const tzcOptions = optionsHTML;
  const tzcPopupButton = tzcPopupHTML;
  const tzcPopupCSS = tzcPopupCSSCSS;

  const query = document.querySelector.bind(document);

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

  // Add options
  query('#tzc-full-list').innerHTML = tzcOptions;
  query('#tzc-from-tz').innerHTML = tzcOptions;
  query('#tzc-to-tz').innerHTML = tzcOptions;

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  query('#tzc-full-list').addEventListener('change', (event) => {
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
