// add(1)(1) // -> 2

import React from "react";
import { getChecked } from "./utils/react/getChecked";
import { getValue } from "./utils/react/getValue";
import { preventDefault } from "./utils/react/preventDefault";
import { stopPropagation } from "./utils/react/stopPropagation";

const add = (leftSide: number) => (reghrSide: number) => leftSide + reghrSide;

const addOne = add(1);

addOne(5);

window.addEventListener('resize', () => { });

interface addFn {
    element: () => void
    name: string
    handler: string
}

function addEventListenerWithDispose(element:any, name:any, handler:any) {
    element.addEventListener(name, handler);
    return () => element.removeEventListener(name, handler);
}

const dispose = addEventListenerWithDispose(window, 'resize', () => {
    console.log('rezise');
    dispose()
});

interface IBlockProps {
    title: string
    id:string
}

const withIdkey = withKey('id');

function Feed(props: { blocks: IBlockProps[]}) {
    return (
        <div>
            {props.blocks.map(withIdkey(Block))}
        </div>
    );
}

function Block(props: IBlockProps) {
    return (
        <div>{ props.title}</div>
    )
}

function withKey(key?: string) {
    return <E extends object, T extends React.ComponentType<E>>(component: T) => (props: E, index: number) =>
        React.createElement(
            component,
            { ...props, key: key ? props[key as keyof E] : index },
            [],
        );
}

function Input({onChange, value}: { onChange: (value: string) => void, value: string }) {
    return (
        <input value={value} onChange={getValue(onChange)} />
    )
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
    return (
        <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
    )
}


function NotStandardLink(props: any) {
        return (
            <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello world</a>
        )
}

