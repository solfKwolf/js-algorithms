import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    // 我们将基于LinkedList实现Stack，
    // 因为这些结构非常相似。
    // 比较Stack的push/pop操作和LinkedList的prepend/deleteHead操作。
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   * @memberof Stack
   */
  isEmpty() {
    // 如果它的链表没有head，栈是空的。
    return !this.linkedList.head;
  }

  /**
   *
   * @returns {*}
   * @memberof Stack
   */
  peek() {
    if (this.isEmpty()) {
      // If the linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the start of linked list without deleting it.
    return this.linkedList.head.value;
  }

  /**
   *
   * @param {*} value
   * @memberof Stack
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   *
   * @returns {*}
   * @memberof Stack
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   *
   * @return {*[]}
   * @memberof Stack
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
