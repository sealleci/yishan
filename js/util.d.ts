import { NestedArray } from './type';
declare function sleep(ms: number): Promise<unknown>;
declare function roll(min: number, max?: number): number;
declare function range(start: number, end?: number): readonly number[];
declare function flatten<T>(nested_array: NestedArray<T>): T[];
declare function pad(text: string, filler: string, width: number, is_left?: boolean): string;
declare function getCurrentTime(): string;
declare function clearChildren(element: HTMLElement): void;
declare function toggleClass(element: HTMLElement, class_name: string): void;
declare function addClass(element: HTMLElement, class_name: string): void;
declare function removeClass(element: HTMLElement, class_name: string): void;
export { sleep, roll, range, flatten, pad };
export { getCurrentTime };
export { clearChildren, toggleClass, addClass, removeClass };
