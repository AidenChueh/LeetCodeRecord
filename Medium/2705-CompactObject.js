/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (!obj) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const compacted = {};
    for (const key in obj) {
        let val = compactObject(obj[key]);
        if (val) compacted[key] = val;
    }

    return compacted;
    123

};