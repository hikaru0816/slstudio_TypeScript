"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
function dateFormat(date, type) {
    const types = [...type];
    let answer = "";
    types.forEach(typeInfo => {
        if (typeInfo === "Y") {
            answer += String(date.getFullYear());
        }
        else if (typeInfo === "m") {
            const month = String(date.getMonth() + 1);
            if (month.length === 1) {
                answer += "0";
                answer += month;
            }
            else {
                answer += month;
            }
        }
        else if (typeInfo === "d") {
            const day = String(date.getDate());
            if (day.length === 1) {
                answer += "0";
                answer += day;
            }
            else {
                answer += day;
            }
        }
        else if (typeInfo === "H") {
            const hour = String(date.getHours());
            if (hour.length === 1) {
                answer += "0";
                answer += hour;
            }
            else {
                answer += hour;
            }
        }
        else if (typeInfo === "i") {
            const minute = String(date.getMinutes());
            if (minute.length === 1) {
                answer += "0";
                answer += minute;
            }
            else {
                answer += minute;
            }
        }
        else if (typeInfo === "s") {
            const second = String(date.getSeconds());
            if (second.length === 1) {
                answer += "0";
                answer += second;
            }
            else {
                answer += second;
            }
        }
        else {
            answer += typeInfo;
        }
    });
    console.log(answer);
}
exports.dateFormat = dateFormat;
