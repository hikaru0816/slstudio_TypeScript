"use strict";
function printFilteredWords(words, length) {
    console.log(words.filter(word => word.length > length));
}
printFilteredWords(["company", "department", "available", "board"], 7); // ["department", "available"]
printFilteredWords(["likely", "employee", "customer", "increase", "president"], 8); // ["president"]
