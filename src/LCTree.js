/**
 * LCTree類別 - 樹狀選單
 */
export class LCTree {
    /**
     * 建構式
     * @param {string} 裝載容器的選擇器
     * @param {Array.<Object>} 樹狀選單資料
     */
    constructor(containerSelector, arrData) {
        this.container = document.querySelector(containerSelector)

        this.arrData = JSON.parse(JSON.stringify(arrData))

        //建立樹狀結構根節點
        this.structure = new Tree(0, '根')

        this.Init()
    }

    /**
     * 初始化
     */
    Init() {
        //找出根節點的子節點，並接著遞迴處理
        arrData
            .filter(a => a.parent_id === 0)
            .forEach(d => this.InsertNode(0, d))
    }

    /**
     * 樹狀結構加入子節點到目標父節點中
     * @param {*} parentId 父節點的Key
     * @param {*} data 子節點的資料
     */
    InsertNode(parentId, data) {
        this.structure.insert(parentId, data.id, data.name);
        arrData
            .filter(a => a.parent_id === data.id)
            .forEach(d => this.InsertNode(data.id, d))
    }

}

class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    get isRoot() {
        return this.parent === null;
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get hasChildren() {
        return !this.isLeaf;
    }

    get depth() {
        let dist = 0;
        dist = this.calcDepth(this, dist)
        return dist;
    }

    calcDepth(node, depth) {
        if (node.isRoot) {
            return depth;
        }
        else {
            return this.calcDepth(node.parent, depth + 1)
        }
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
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

    insert(parentNodeKey, key, value = key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node));
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
}
