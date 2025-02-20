/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let idx = s.indexOf(part);

    while (idx !== -1) {
        s = s.substring(0, idx) + s.substring(idx + part.length);
        idx = s.indexOf(part);
    }

    return s;
};