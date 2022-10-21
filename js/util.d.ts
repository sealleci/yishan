import { NestedArray } from './type.js';
/**
 * Sleep for given time.
 *
 * Usage:
 * ``` js
 * await sleep(100)
 * ```
 * @param ms Milliseconds.
 */
declare function sleep(ms: number): Promise<void>;
/**
 * Return a random integer within given range.
 *
 * Usage:
 * ``` js
 * roll(5) // i in [0, 5)
 * roll(1, 10) // i in [1, 10]
 * ```
 */
declare function roll(min: number, max?: number): number;
/**
 * Return a discrete array of given range.
 *
 * Usage:
 * ``` js
 * range(3) // [0, 1, 2]
 * range(1, 3) // [1, 2, 3]
 * ```
 */
declare function range(start: number, end?: number): readonly number[];
/**
 * Flatten nested array to one dimension.
 *
 * Usage:
 * ``` js
 * flatten([[1], [2]]) // [1, 2]
 * ```
 */
declare function flatten<T>(nested_array: NestedArray<T>): T[];
/**
 * @param text Original string.
 * @param filler Padding filler.
 * @param width Padding width.
 * @param is_left Flag which determines left or right padding.
 */
declare function pad(text: string, filler: string, width: number, is_left?: boolean): string;
/**
 * Print given value into console.
 * @param lazy_value Value with lazy evaluation.
 */
declare function log(label: string, lazy_value: () => any): void;
/**
 * Determine whether given condition is true, and throw error when false.
 * @param lazy_condition Condition with lazy evaluation.
 */
declare function assert(label: string, lazy_condition: () => boolean): void;
/**
 * Call functions in a row which are both without parameters and returns.
 */
declare function conduct(...functions: Array<() => void>): void;
/**
 * Wait promises in a row which are both without parameters and returns.
 */
declare function conductSync(...promises: (() => Promise<void>)[]): Promise<void>;
/**
 * Determine whether a variable is not ```null``` and ```undefined```.
 */
declare function diagnose(variable: unknown): boolean;
/**
 * Return the current local time.
 *
 * Format of time:
 * ``` js
 * /yyyy-MM-dd HH:mm:ss/
 * ```
 */
declare function watch(): string;
declare function clearChildren(element: HTMLElement): void;
declare function toggleClass(element: HTMLElement, class_name: string): void;
declare function addClass(element: HTMLElement, class_name: string): void;
declare function removeClass(element: HTMLElement, class_name: string): void;
export { sleep, roll, range, flatten, pad, diagnose, log, assert, watch, conduct, conductSync };
export { clearChildren, toggleClass, addClass, removeClass };
