/**
 *
 * @export
 * @class Comparator
 */
export default class Comparator {
  /**
   * Creates an instance of Comparator.
   * @param {function(a: *, b: *)} [compareFunction] - It may be custom compare function that, let's
   * say may compare custom objects together.
   * @memberof Comparator
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
   * @static
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @return {number}
   * @memberof Comparator
   */
  static defaultCompareFunction(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @memberof Comparator
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @memberof Comparator
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @memberof Comparator
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @memberof Comparator
   */
  lessThanOrEqual(a, b) {
    return this.equal(a, b) || this.lessThan(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @memberof Comparator
   */
  greaterThanOrEqual(a, b) {
    return this.equal(a, b) || this.greaterThan(a, b);
  }

  /**
   * Reverses the comparison order.
   */
  reverse(a, b) {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
