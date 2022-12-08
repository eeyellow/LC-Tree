export class TreeNode {
    constructor(key, value = key, props = {}, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];

        this.isOpen = props.isOpen
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

    //-----------------------------------------------------

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

    get allParent () {
        return this.findParent(this, [])
    }

    findParent (node, result) {
        let currentParent = node.parent
        if (currentParent) {
            result.push(currentParent)
            this.findParent(currentParent, result)
        }
        return result
    }
}