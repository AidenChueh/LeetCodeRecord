/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    /**
     * i 課程後面有那些課程
     */
    const followClassForI = Array.from({ length: numCourses }, () => []);

    /**
     * i 課程被指向幾次
     */
    const countForI = new Array(numCourses).fill(0);

    // 依據 prerequisites 歸類課堂先後順序
    for (let p of prerequisites) {
        const cur = p[0];
        const next = p[1];

        followClassForI[cur].push(next);
        countForI[next]++;
    }

    /**
     * 找出所有先修課
     */
    const preClass = [];
    for (let i = 0; i < countForI.length; i++) {
        if (countForI[i] === 0) {
            preClass.push(i);
        }
    }

    /**
     *  i 課程的先修課集合
     */
    const followClassMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        followClassMap.set(i, new Set());
    }

    while (preClass.length > 0) {
        // 從先修課開始
        const curClass = preClass.shift();

        // 找出所有 curClass 的後續課程，curClass 便指向該課程
        for (let next of followClassForI[curClass]) {
            followClassMap.get(next).add(curClass);

            // 把 curClass 的所有先修課也加入到後繼課程的先修課集合
            for (let pre of followClassMap.get(curClass)) {
                followClassMap.get(next).add(pre);
            }

            countForI[next]--;

            if (countForI[next] === 0) {
                preClass.push(next);
            }
        }
    }

    return queries.map(([u, v]) => followClassMap.get(v).has(u));
};