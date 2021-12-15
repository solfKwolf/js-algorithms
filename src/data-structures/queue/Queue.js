import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   *
   *
   * @return {boolean}
   * @memberof Queue
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   *
   * @returns {*}
   * @memberof Queue
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head.value;
  }

  /**
   * 在队列的末尾(链表的尾部)添加一个新元素。
   *
   * @param {*} value
   * @memberof Queue
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * 删除队列前面的元素(链表的头)。
   * 如果队列为空，返回null
   * @return {*}
   * @memberof Queue
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @param {*} callback
   * @return {string}
   * @memberof Queue
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
