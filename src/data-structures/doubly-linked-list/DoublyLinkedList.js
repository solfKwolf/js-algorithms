import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';
/**
 *
 * @export
 * @class DoublyLinkedList
 */
export default class DoublyLinkedList {
  /**
   * Creates an instance of DoublyLinkedList.
   * @param {Function} comparatorFunction
   * @memberof DoublyLinkedList
   */
  constructor(comparatorFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;
    /** @var DoublyLinkedListNode  */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * 考虑节点为null或不为null 2中情况
   * @param {*} value
   * @memberof DoublyLinkedList
   */
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   *
   *
   * @param {*} value
   * @memberof DoublyLinkedList
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.tail) {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    return this;
  }

  /**
   *
   *
   * @param {*} value
   * @memberof DoublyLinkedList
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  /**
   *
   * @param {*} {value = undefined, callback = undefined}
   * @memberof DoublyLinkedList
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   *
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }
    if (this.tail === this.head) {
      const deletedNode = this.tail;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }
    const deletedNode = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return deletedNode;
  }

  /**
   *
   * @memberof DoublyLinkedList
   */
  deleteHead() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }
    const deletedNode = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    return deletedNode;
  }

  /**
   * @return {*[]}
   * @memberof DoublyLinkedList
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   *
   * @param {*[]} values
   * @return {DoublyLinkedList}
   * @memberof DoublyLinkedList
   */
  fromArray(values) {
    values.forEach((value) => {
      this.append(value);
    });

    return this;
  }

  /**
   *
   * @param {*} callback
   * @memberof DoublyLinkedList
   */
  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  /**
   * Reverse
   * @returns {DoublyLinkedList}
   * @memberof DoublyLinkedList
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;
      prevNode = currNode.previous;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;
      currNode.previous = nextNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
