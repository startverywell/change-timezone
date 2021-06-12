"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Returns a Unix Time given a string and a Time Zone
*/
var toUnixTimeHelpers_1 = __importDefault(require("./toUnixTimeHelpers"));
function toUnixTime(input, fromTimeZone) {
    var unixTime;
    for (var property in toUnixTimeHelpers_1.default) {
        // Ensures Unix Time (10 digits) is returned by the conversion functions
        unixTime = /\d{10}/.exec(toUnixTimeHelpers_1.default[property](input, fromTimeZone));
        if (unixTime) {
            unixTime = unixTime[0];
            break;
        }
    }
    return unixTime;
}
exports.default = toUnixTime;
