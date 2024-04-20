import { Menu } from './Menu';
import { Maybe } from 'react-tea-cup';
import { Box, Dim } from '../common';
export interface Model<T> {
    readonly uuid: Maybe<string>;
    readonly windowSize: Maybe<Dim>;
    readonly menu: Menu<T>;
    readonly state: MenuState;
    readonly error: Maybe<Error>;
    readonly child: Maybe<Model<T>>;
    readonly navigatedWithKeyboard: boolean;
    readonly subMenuCounter: number;
}
export declare function initialModel<T>(menu: Menu<T>, refBox: Box): Model<T>;
export declare type MenuState = {
    tag: 'placing';
    refBox: Box;
} | {
    tag: 'open';
    box: Box;
};
export declare function menuStatePlacing(refBox: Box): MenuState;
export declare function keyboardNavigated<T>(model: Model<T>, navigatedWithKeyboard?: boolean): Model<T>;
