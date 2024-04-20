import { ListWithSelection, Maybe, Task } from 'react-tea-cup';
export declare class Menu<T> {
    private readonly elements;
    constructor(elements: ListWithSelection<MenuElement<T>>);
    selectFirstItem(): Menu<T>;
    selectItem(item: MenuItem<T>): Menu<T>;
    deselectAll(): Menu<T>;
    get elems(): ReadonlyArray<MenuElement<T>>;
    get selectedItem(): Maybe<MenuItem<T>>;
    isSelected(item: MenuItem<T>): boolean;
    private findNextItemIndex;
    private findPreviousItemIndex;
    moveSelection(down: boolean): Menu<T>;
    indexOfItem(item: MenuItem<T>): Maybe<number>;
}
export declare type MenuElement<T> = MenuItem<T> | MenuSeparator;
export interface MenuItem<T> {
    tag: 'item';
    readonly userData: T;
    readonly subMenu: Maybe<Menu<T>>;
}
export interface MenuSeparator {
    tag: 'separator';
}
export declare function menu<T>(items: ReadonlyArray<MenuElement<T>>): Menu<T>;
export declare function item<T>(userData: T, subMenu?: Menu<T>): MenuItem<T>;
export declare const separator: MenuSeparator;
export declare function menuId(uuid: string): string;
export declare function menuItemId(menuId: string, itemIndex: number): string;
export declare function menuTask(uuid: string): Task<Error, HTMLElement>;
export declare function menuItemTask(menuId: string, itemIndex: number): Task<Error, HTMLElement>;
