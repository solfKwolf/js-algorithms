import Comparator from "../../utils/comparator/Comparator";
import HashTable from "../hash-table/HashTable";

export default class BinaryTreeNode {
  /**
   * Creates an instance of BinaryTreeNode.
   * @param {*} [value] - node value
   * @memberof BinaryTreeNode
   */
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // Any node related meta information may be store here.
    this.meta = new HashTable();

    // This comparator is used to compare binary tree nodes with each other.
    this.nodeComparator = new Comparator();
  }

  /**
   *
   * @return {number}
   * @memberof BinaryTreeNode
   */
  get leftHight() {
    if (!this.left) return 0;
    return this.left.height + 1;
  }

  /**
   *
   * @return {number}
   * @memberof BinaryTreeNode
   */
  get rightHight() {
    if (!this.right) return 0;
    return this.right.height + 1;
  }

  /**
   *
   * @return {number}
   * @memberof BinaryTreeNode
   */
  get height() {
    return Math.max(this.leftHight, this.rightHight);
  }

  /**
   *
   * @return {number}
   * @memberof BinaryTreeNode
   */
  get balanceFactor() {
    return this.leftHight - this.rightHight;
  }

  /**
   *
   *  @return {BinaryTreeNode}
   * @memberof BinaryTreeNode
   */
  get uncle() {
    // Check if current Node has parent.
    if (!this.parent) {
      return undefined;
    }

    // Check if current has grand-parent.
    if (!this.parent.parent) {
      return undefined;
    }

    // Check if grand-parent has two children.
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    // So for now we know that current node has grand-parent and this
    // grand-parent has two children. Let's find out who is the uncle.
    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      // Right one is an uncle.
      return this.parent.parent.right;
    }

    // Left one is an uncle.
    return this.parent.parent.left;
  }

  /**
   *
   * @memberof BinaryTreeNode
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   *
   * @memberof BinaryTreeNode
   */
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }

  /**
   *
   * @param {*} node
   * @memberof BinaryTreeNode
   */
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   * @param { BinaryTreeNode } nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   * @memberof BinaryTreeNode
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  /**
   * @return {*[]}
   */
  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
