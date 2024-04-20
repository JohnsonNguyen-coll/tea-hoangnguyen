import { Dim, Box } from '../common';
import { Result } from 'react-tea-cup';
import { MenuItem } from './Menu';
export declare type Msg<T> = {
    tag: 'got-window-dimensions';
    d: Dim;
} | {
    tag: 'got-uuid';
    uuid: string;
} | {
    tag: 'got-menu-box';
    r: Result<Error, Box>;
} | {
    tag: 'key-down';
    key: string;
} | {
    tag: 'mouse-move';
    item: MenuItem<T>;
    itemIndex: number;
} | {
    tag: 'mouse-leave';
    item: MenuItem<T>;
    itemIndex: number;
} | {
    tag: 'got-item-box';
    item: MenuItem<T>;
    r: Result<Error, Box>;
    selectFirst: boolean;
    subMenuCounter: number;
} | {
    tag: 'item-clicked';
    item: MenuItem<T>;
} | {
    tag: 'child-msg';
    m: Msg<T>;
} | {
    tag: 'doc-mouse-down';
} | {
    tag: 'noop';
};
export declare function noop<T>(): Msg<T>;
export declare function gotWindowDimensions<T>(d: Dim): Msg<T>;
export declare function gotUuid<T>(uuid: string): Msg<T>;
export declare function gotMenuBox<T>(r: Result<Error, Box>): Msg<T>;
export declare function gotKeyDown<T>(key: string): Msg<T>;
export declare function childMsg<T>(m: Msg<T>): Msg<T>;
export declare function gotItemBox<T>(item: MenuItem<T>, r: Result<Error, Box>, subMenuCounter: number, selectFirst: boolean): Msg<T>;
export declare function docMouseDown<T>(): Msg<T>;
