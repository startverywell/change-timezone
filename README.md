# Chrome Time Zone Converter

> **Started**: Sep 2019

## Description

A Chrome extension that converts a date time to a new time zone of the user's choice..

- It automatically converts any times of: YYYY-MM-DD HH:MM:SS [Time Zone Abbreviation] format to the user's chosen default. It also has a manual converter if the page hasn't automatically converted (can also convert Unix time).

- The target element on a page is a table data cell (`'td'`) and format of: `YYYY-MM-DD HH:MM:SS` or Unix Time, however this should be somewhat easily extended for other formats and target elements on specific pages. See [Production](https://github.com/richardaspinall/chrome-timezone-converter#production) for more information

## Goals

## Requirements

- Node 14.16.1
- NPM 7.13.0
- Webpack 5.30.0

## Install

1. Clone repo
2. Run `npm run install`

## Development

1. Run `npm run dev -s` (silent mode)
2. Open `mock_site/index-dev.html`

## Production

1. Run `npm run build`

2. Production usage is through a Chrome extension. It will run / show on any page that you have configured against `matches` under `content_scripts`in the `dist/manifest.json` file. The current `manifest` defaults to all `https://` websites (but won't convert anything unless there are <td> table cells with a `YYYY-MM-DD HH:MM:SS` format. See here for matching: https://developer.chrome.com/docs/extensions/mv2/match_patterns/

3. For local testing, the `dist` folder can be added into your extensions in Chrome [chrome://extensions/](chrome://extensions/). You will need to turn on `developer mode` before you can add an extension this way, see [Developer Mode](https://developer.chrome.com/docs/extensions/mv3/faq/#:~:text=You%20can%20start%20by%20turning,right%2Dhand%20corner%20is%20checked)

4. After `developer mode` has been turned on, simply drag the `dist` folder or load unpacked here: chrome://extensions/

**Note:** the page initial default is set to "America/Los_Angeles" which can be changed via `PAGE_DEFAULT_TIMEZONE` in `src/main.js`.

Note:

## Usage

1. Open `mock-site/index-dev.html` in a Chrome browser
2. Click the clock icon that should appear up the top right
3. Change the page Time Zone and click Convert
4. Manually enter a Date Time or Unix Time with from - to Time Zones via text input or through the picker, and click Convert

### Production usage only

There should also be the clock icon in your Chrome extensions tray (you may need to pin it), this can be used to manually convert whereever you are in Chrome regardless of the `manifest.json`

## Extending

In order to add additional formats to convert, the following files need to be updated:

1. `src/conversion/config/index.ts` here you can change the default time zone of the page
2. `.../regex.ts` here you will add any formats as regular expressions that will be converted. Exporting them via the `regexsToReplace` array.
3. `src/conversion/toUnixTime.ts` here you will create your function to convert the date time format returning a unix time. Then adding to the `toUnixFuncs` array.

`src/conversion/momentInterface.ts` is a simple interface to the moment library which can be used and updated for step 3

---
