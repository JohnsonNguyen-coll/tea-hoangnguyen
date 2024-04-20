import { Msg } from './Msg';
import { Cmd, Maybe, Sub } from 'react-tea-cup';
import { Model } from './Model';
import { Menu } from './Menu';
import { Box } from '../common';
import { OutMsg } from './OutMsg';
export declare function open<T>(menu: Menu<T>, refBox: Box, selectFirst?: boolean): [Model<T>, Cmd<Msg<T>>];
export declare function update<T>(msg: Msg<T>, model: Model<T>): [Model<T>, Cmd<Msg<T>>, Maybe<OutMsg<T>>];
export declare function subscriptions<T>(model: Model<T>): Sub<Msg<T>>;
