import { TreeNode } from './TreeNode.js'

export class Tree {
    constructor(key, value = key, props = {}) {
        this.root = new TreeNode(key, value, props);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    insert(parentNodeKey, key, value = key, props) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, props, node));
                return true;
            }
        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter((c) => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    //-----------------------------------------------------

    /**
     * 切換節點的Boolean屬性
     * @param {Object} param - 物件參數
     * @param {integer} param.key - 節點的Key值
     * @param {string} param.prop - 節點的Boolean屬性名稱
     */
    toggleProp(param) {        
        let targetNode = this.find(param.key * 1)
        if (targetNode && targetNode.hasOwnProperty(param.prop) && targetNode[param.prop] !== undefined) {
            targetNode[param.prop] = !targetNode[param.prop]
        }
    }

    /**
     * 全部展開
     */
    AllExpend() {
        for (let node of this.preOrderTraversal()) {
            if(node.hasOwnProperty('isOpen') && node['isOpen'] !== undefined){
                node['isOpen'] = true
            }
        }
    }

    /**
     * 全部折疊
     */
    AllShrink() {
        for (let node of this.preOrderTraversal()) {
            if(node.hasOwnProperty('isOpen') && node['isOpen'] !== undefined){
                node['isOpen'] = false
            }
        }
    }
}
