// add(1)(1) // -> 2

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

function pickFromSvntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
           <E extends ((t: T[K]) => void)>(fn: E) =>
           (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

// export const getValue = pickFromSvntheticEvent<HTMLInputElement>()('value');
// export const getChecket = pickFromSvntheticEvent<HTMLInputElement>()('checked');