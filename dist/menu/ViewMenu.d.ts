import * as React from 'react';
import { Menu, MenuItem } from './Menu';
import { Msg } from './Msg';
import { Dispatcher } from 'react-tea-cup';
import { ItemRenderer } from './ItemRenderer';
import { Model } from './Model';
export interface ViewMenuProps<T> {
    model: Model<T>;
    dispatch: Dispatcher<Msg<T>>;
    renderer: ItemRenderer<T>;
}
export declare function ViewMenu<T>(props: ViewMenuProps<T>): React.ReactElement;
export interface ViewMenuItemProps<T> {
    uuid: string;
    itemIndex: number;
    menu: Menu<T>;
    item: MenuItem<T>;
    dispatch: Dispatcher<Msg<T>>;
    renderer: ItemRenderer<T>;
}
export declare function ViewMenuItem<T>(props: ViewMenuItemProps<T>): React.ReactElement;
