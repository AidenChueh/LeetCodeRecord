/** 
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const arr1Obj = arr1.reduce((res, item) => {
        res[item.id] = item;

        return res;
    }, {});

    const mergeObj = arr2.reduce((res, item) => {
        if (res[item.id]) {
            for (const key in item) res[item.id][key] = item[key];
        } else {
            res[item.id] = item;
        }

        return res;
    }, arr1Obj);

    return Object.values(mergeObj);
};

