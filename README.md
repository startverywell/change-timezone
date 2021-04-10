> **Date started**: (Sep 2019)

> **Date ended**:

## Description

Time Zone converter is a Chrome extension that converts time to a time zone of the user's choice. Specifically it automatically converts any times of: YYYY-MM-DD HH:MM:SS [Time Zone Abbreviation] format to the user's default. It also has a manual converter if the page hasn't automatically converted (can also convert Unix time).

## Goals

## Requirements

- Requirements for installation

## Install

1. Clone the repository
2. Run `npm run install`

## Development

Run `npm run build`

## Production

Run `npm run build-production`

Production usage is through a Chrome extension. It will run / show on any page that you have configured against `matches` under `content_scripts`in the `dist/manifest.json` file. The current `manifest` defaults to all `https://` websites (but won't convert anything unless there are table cells with the specific format as per: [insert link ] ).

See here for matching: https://developer.chrome.com/docs/extensions/mv2/match_patterns/

For local testing, the `dist` folder can be added into your extensions in Chrome [chrome://extensions/](chrome://extensions/). You will need to turn on `developer mode` before you can add an extension this way, see [Developer Mode](https://developer.chrome.com/docs/extensions/mv3/faq/#:~:text=You%20can%20start%20by%20turning,right%2Dhand%20corner%20is%20checked)

After `developer mode` has been turned on, simply drag the `dist` folder or load unpacked here: [chrome://extensions/](chrome://extensions/)

## Usage

1. Open `tests/mock-site/index-dev.html` in a Chrome browser
2. Click the clock icon that should appear up the top right
3. Change the page Time Zone and click Convert
4. Manually enter a Date Time or Unix Time with from - to Time Zones via text input or through the picker, and click Convert

---

## Resources

- Link to resource
