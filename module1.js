"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateFormat_js_1 = require("./modules/dateFormat.js");
console.log((0, dateFormat_js_1.dateFormat)(new Date(1610350651 * 1000), "Y/m/d")); // "2021/01/11"
console.log((0, dateFormat_js_1.dateFormat)(new Date(2022, 4, 23, 8, 54, 5), "Y/m/d H:i")); // "2022/04/23 08:54"
console.log((0, dateFormat_js_1.dateFormat)(new Date("2020-10-03 11:02:09"), "YmdHis")); // "20201003110209"
