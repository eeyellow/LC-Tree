export class TreeNode {
    constructor (key, value = key, props = {}, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
        this._isOpen = props.isOpen;
        this._isCheck = props.isCheck;
    }

    get isRoot () {
        return this.parent === null;
    }

    get isLeaf () {
        return this.children.length === 0;
    }

    get hasChildren () {
        return !this.isLeaf;
    }

    get isOpen () {
        return this._isOpen;
    }

    set isOpen (value) {
        this._isOpen = value;
    }

    get isCheck () {
        return this._isCheck;
    }

    set isCheck (value) {
        this._isCheck = value;
    }

    get depth () {
        return this.calcDepth(this, 0)
    }

    calcDepth (node, depth) {
        if (node.isRoot) {
            return depth;
        }
        return this.calcDepth(node.parent, depth + 1)
    }

    get allParent () {
        const result = [];
        let currentParent = this.parent;
        while (currentParent) {
            result.push(currentParent);
            currentParent = currentParent.parent;
        }
        return result;
    }
}
