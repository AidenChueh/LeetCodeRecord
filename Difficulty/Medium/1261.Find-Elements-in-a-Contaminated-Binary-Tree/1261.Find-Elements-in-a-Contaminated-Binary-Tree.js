/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    this.treeVal = new Set();
    this.recover(root, 0);
};

FindElements.prototype.recover = function (node, val) {
    if (!node) return;

    node.val = val;
    this.treeVal.add(val);

    this.recover(node.left, val * 2 + 1);
    this.recover(node.right, val * 2 + 2);
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.treeVal.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */