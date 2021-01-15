function formatDateTime(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}
function formatAsSelectedTimeZone(dateTime, timeZone) {
  return moment.tz(formatDateTime(dateTime), timeZone);
}
function getZoneName(dateTime, toTimeZone) {
  return moment.tz(dateTime, toTimeZone).zoneName();
}
function convertDateTime(oldDateTime, toTimeZone) {
  console.log(oldDateTime);
  let toDateTime = oldDateTime.clone().tz(toTimeZone);
  return formatDateTime(toDateTime);
}

function sayHello() {
  console.log('hello');
}

function convertFromTimeStamp(unixFormat) {
  const dateTimeFormat = new Date(unixFormat * 1000);
  return dateTimeFormat;
}
function convertDateToTimeStamp(dateTimeFormat) {
  let unixFormat = Date.parse(dateTimeFormat);
  return unixFormat / 1000;
}

function convertDateTimeToMomentObject(dateTimeWithAbbrev, currentTimeZone) {
  const dateTimeRegex = /(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
  const timeZoneAbbrevRegex = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/;
  let dateTime;
  let timeZoneAbbrev;
  let oldDateTimeAsMomentObject;

  dateTime = dateTimeRegex.exec(dateTimeWithAbbrev[0]);

  // Working with the abbreviations in later logic implementation
  timeZoneAbbrev = timeZoneAbbrevRegex.exec(dateTimeWithAbbrev[0]);

  if (timeZoneAbbrev == null) {
    timeZoneAbbrev = [];
    timeZoneAbbrev[1] = getZoneName(dateTime[0], 'America/Los_Angeles');
  }
  /////////////////////////////////////////////////////////////////
  oldDateTimeAsMomentObject = formatAsSelectedTimeZone(
    new Date(dateTime[1]),
    currentTimeZone
  );
  return oldDateTimeAsMomentObject;
}

function convertEachCell(tableCells) {
  const dateTimeWithAbbrevRegex = /(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;

  // Hard coded Time Zones to remove
  const ptTimeZone = 'America/Los_Angeles';
  const currentTimeZone = 'Pacific/Fiji';
  const newTimeZone = 'Australia/Canberra';

  tableCells.forEach(function (element) {
    const dateTimeWithAbbrev = dateTimeWithAbbrevRegex.exec(element.innerHTML);

    let newDateTime;

    if (dateTimeWithAbbrev) {
      const oldDateTimeAsMomentObject = convertDateTimeToMomentObject(
        dateTimeWithAbbrev,
        currentTimeZone
      );
      console.log(oldDateTimeAsMomentObject);
      newDateTime = convertDateTime(oldDateTimeAsMomentObject, newTimeZone);
      element.innerHTML =
        newDateTime + ' ' + getZoneName(newDateTime, newTimeZone);
    }
  });
}

function runPageConversion() {
  const tableCells = document.body.querySelectorAll('td');
  if (tableCells.length != 0) {
    convertEachCell(tableCells);
  } else {
    console.log('No table cells to convert on this on this page');
  }
}

// runPageConversion();
