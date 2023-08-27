"use strict";
function buildName(isTokumei, firstName, secondName) {
    if (isTokumei === true) {
        return "匿名";
    }
    else if (secondName === undefined) {
        return firstName;
    }
    else {
        return secondName + " " + firstName;
    }
}
console.log(buildName(true, "Taro")); // "匿名"
console.log(buildName(false, "Jiro", "Tanaka")); // "Tanaka Jiro"
console.log(buildName(false, "Saburo")); // "Saburo"
