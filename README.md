# Chrome Time Zone Converter

> **Started**: Sep 2019

## Description

A Chrome extension that converts a date time to a new time zone of the user's choice.

- It automatically converts any times of: `YYYY-MM-DD HH:MM:SS` format to the user's chosen default. It also has a manual converter if the page hasn't automatically converted (can also convert Unix time).

**Assumptions**

1. There is one default timezone that the times on a page are generated in (defaults to "America/Los_Angeles"
2. They are all contained in the same HTML entity (such as `td`)

- See [Extending](https://github.com/richardaspinall/chrome-timezone-converter#extending) for details on how to modify defaults and extend to support other formats

## Install

Run `npm install`

## Development

1. Run `npm run dev`
2. Open `mock_site/index-dev.html`

## Production

1. Run `npm run build`

2. Production usage is through a Chrome extension. It will run / show on any page that you have configured against `matches` under `content_scripts`in the `dist/manifest.json` file. The current `manifest` defaults to all `https://` websites.

3. For local testing, the `dist` folder can be added into your extensions in Chrome [chrome://extensions/](chrome://extensions/). You will need to turn on `developer mode` before you can add an extension this way, see [Developer Mode](https://developer.chrome.com/docs/extensions/mv3/faq/#:~:text=You%20can%20start%20by%20turning,right%2Dhand%20corner%20is%20checked)

4. After `developer mode` has been turned on, simply drag the `dist` folder or load unpacked here: chrome://extensions/

**Note:** the page initial default is set to "America/Los_Angeles" which can be changed via `PAGE_DEFAULT_TIMEZONE` in `src/main.js`.

## Usage

1. Open `mock-site/index-dev.html` in a Chrome browser
2. Click the clock icon that should appear up the top right
3. Change the page Time Zone and click Convert
4. Manually enter a Date Time or Unix Time with from - to Time Zones via text input or through the picker, and click Convert

### Production usage only

There should also be the clock icon in your Chrome extensions tray (you may need to pin it), this can be used to manually convert whereever you are in Chrome regardless of the `manifest.json`

## Extending

In order to add additional formats to convert, the following files need to be updated under `src/conversion`:

1. `/config/index.ts` here you can change the default time zone of the page
2. `/config/regex.ts` here you will add any formats as regular expressions that will be converted. Exporting them via the `regexsToReplace` array.
3. `/toUnixTime.ts` here you will create your function to convert the date time format returning a unix time. Then adding to the `toUnixFuncs` array.

**Note:** `/momentInterface.ts` is a simple interface to the moment library which can be used and updated for step 3

---
