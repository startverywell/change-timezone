"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Add functions that convert a Date Time string and Time Zone as input and return Unix Times
*/
var momentInterface_js_1 = __importDefault(require("./momentInterface.js"));
// Converts format: YYYY-MM-DD HH:MM:SS ABC (e.g 2020-01-01 09:00:00 PST)
// https://en.wikipedia.org/wiki/ISO_8601
function isoDateTimeFormat(input, fromTimeZone) {
    var dateTime = /(\d{4}-\d{2}-\d{2}(?:\s|T)\d{2}(?::\d{2}){1,2})/.exec(input);
    if (dateTime) {
        return momentInterface_js_1.default.dateTimeToUnixTime(dateTime[1], fromTimeZone);
    }
}
var arrFunctions = [isoDateTimeFormat];
exports.default = arrFunctions;
