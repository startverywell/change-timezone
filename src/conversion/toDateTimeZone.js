"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Returns a Date Time with Zone Name formatted:
  YYYY-MM-DD HH:MM:SS ABC
  
  Examples:
  2020-01-01 09:00:00 PST
*/
var momentInterface_js_1 = __importDefault(require("./momentInterface.js"));
function toDateTimeZone(unixTime, toTimeZone) {
    var dateTime = momentInterface_js_1.default.unixTimeToDateTime(unixTime, toTimeZone);
    var zoneName = momentInterface_js_1.default.getZoneName(toTimeZone);
    return dateTime + " " + zoneName;
}
exports.default = toDateTimeZone;
