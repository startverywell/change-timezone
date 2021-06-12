"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Wrapper functions to interface with moment
*/
var moment_1 = __importDefault(require("moment"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
function formatDateTime(dateTime) {
    return moment_1.default(dateTime).format('YYYY-MM-DD HH:mm:ss');
}
function getZoneName(timeZone) {
    return moment_timezone_1.default.tz(timeZone.toString()).zoneName();
}
function unixTimeToDateTime(unixTime, timeZone) {
    var dateTime = moment_timezone_1.default.tz(formatDateTime(new Date(unixTime * 1000)), Intl.DateTimeFormat().resolvedOptions().timeZone);
    var convertedDateTime = dateTime.clone().tz(timeZone.toString());
    return formatDateTime(convertedDateTime);
}
function dateTimeToUnixTime(dateTime, timeZone) {
    var newDateTime = moment_timezone_1.default.tz(formatDateTime(new Date(dateTime)), timeZone.toString());
    return Date.parse(newDateTime.toString()) / 1000;
}
exports.default = { getZoneName: getZoneName, unixTimeToDateTime: unixTimeToDateTime, dateTimeToUnixTime: dateTimeToUnixTime };
