export declare type OutMsg<T> = {
    tag: 'request-close';
} | {
    tag: 'item-selected';
    data: T;
};
