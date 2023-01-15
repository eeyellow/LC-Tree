import { TreeNode } from './TreeNode.js'

export class Tree {
    #nodes = new Map()
    #root
    /**
     * @constructor
     * @param {any} key - 節點的Key值
     * @param {any} [value=key] - 節點的Value值
     * @param {Object} [props={}] - 節點的其它屬性
     */
    constructor (key, value = key, props = {}) {
        this.#root = new TreeNode(key, value, props);
        this.#nodes.set(key, this.#root);
    }

    /**
     * 先序遍歷
     * @param {TreeNode} [node=this.#root] - 遍歷的節點
     */
    * preOrderTraversal (node = this.#root) {
        yield node;
        if (node.children.length) {
            for (const child of node.children) {
                yield * this.preOrderTraversal(child);
            }
        }
    }

    /**
     * 後序遍歷
     * @param {TreeNode} [node=this.#root] - 遍歷的節點
     */
    * postOrderTraversal (node = this.#root) {
        if (node.children.length) {
            for (const child of node.children) {
                yield * this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    /**
     * 插入節點
     * @param {integer} parentNodeKey - 父節點的Key值
     * @param {integer} key - 節點的Key值
     * @param {any} [value=key] - 節點的Value值
     * @param {Object} [props={}] - 節點的其它屬性
     */
    insert (parentNodeKey, key, value = key, props) {
        const parentNode = this.#nodes.get(parentNodeKey);
        if (!parentNode) return false;
        const newNode = new TreeNode(key, value, props, parentNode);
        parentNode.children.push(newNode);
        this.#nodes.set(key, newNode);
        return true;
    }

    /**
     * 移除節點
     * @param {integer} key - 節點的Key值
     */
    remove (key) {
        const node = this.#nodes.get(key);
        if (!node) return false;
        if (node.isRoot) return false;
        const filtered = node.parent.children.filter(c => c.key !== key);
        node.parent.children = filtered;
        this.#nodes.delete(key);
        return true;
    }

    /**
     * 查找節點
     * @param {integer} key - 節點的Key值
     */
    find (key) {
        return this.#nodes.get(key);
    }

    /**
     * 切換節點的Boolean屬性
     * @param {Object} param - 物件參數
     * @param {integer} param.key - 節點的Key值
     * @param {string} param.prop - 節點的Boolean屬性名稱
     */
    toggleProp (param) {
        const targetNode = this.find(param.key);
        if (targetNode && Object.prototype.hasOwnProperty.call(targetNode, param.prop) && targetNode[param.prop] !== undefined) {
            targetNode[param.prop] = !targetNode[param.prop];
        }
    }

    /**
     * 全部展開
     */
    AllExpend () {
        for (const node of this.preOrderTraversal()) {
            if (Object.prototype.hasOwnProperty.call(node, 'isOpen') && node.isOpen !== undefined) {
                node.isOpen = true;
            }
        }
    }

    /**
     * 全部折疊
     */
    AllShrink () {
        for (const node of this.preOrderTraversal()) {
            if (Object.prototype.hasOwnProperty.call(node, 'isOpen') && node.isOpen !== undefined) {
                node.isOpen = false;
            }
        }
    }
}
