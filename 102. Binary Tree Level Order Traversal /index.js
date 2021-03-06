/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // Two arrays result carries the actual result
    let result = [];

    let queue = [];
    // Push the root into the queue array
    if (root) queue.push(root);

    // Only if length of queue array is greater than 1
    while (queue.length > 0) {
        let len = queue.length;
        // Temp array to maintain the array of arrays
        let current = [];
        for (let i = 0; i < len; i++) {
            // Pushing the current Node(root) into the current array
            // Then left and the right nodes resp.
            let currentNode = queue.shift();

            current.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        result.push(current);
    }

    return result;
};

/* Recursive approach */

function levelOrder(root) {

    let result = [];
    bfs(root, 0);
    return result;

    function bfs(node, level) {
        if(node === null) return;

        if(level === result.length) {
            result.push([]);
        }

        result[level].push(node.val);

        bfs(node.left, level + 1);
        bfs(node.right, level + 1);
    }

}
