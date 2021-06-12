"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringsToReplace_1 = __importDefault(require("./stringsToReplace"));
function getStringToReplace(target) {
    var stringToReplace;
    for (var regex in stringsToReplace_1.default) {
        stringToReplace = stringsToReplace_1.default[regex].exec(target);
        if (stringToReplace) {
            stringToReplace = stringToReplace[0];
            break;
        }
    }
    return stringToReplace;
}
exports.default = getStringToReplace;
