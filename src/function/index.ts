// 1. Работа с простыми типами

function strFun(str1: string, str2: string) {
    return str1.concat(' ', str2);
}

console.log(strFun('hello', 'world'));


// 2. Работа с интерфейсами

interface IApiText {
    howIDoIt: string;
    simeArray: Array<string | number>
    withData: [{
        howIDoIt: string,
        simeArray: (string | number)[]
    }]
} 

const MyHometask: IApiText = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


// 3. Типизация функций, используя Generic 

const myArray: MyArray<number> = [1,2,3]

interface MyArray<T> {
    [N: number]: T;

    reduce(fn: (acc: T, value: T, valueIndex: number, arr: MyArray<T>) => T): T;
    reduce(fn: (acc: T, value: T, valueIndex: number, arr: MyArray<T>) => T, initialValue: T): T;
    // filter<U>(fn: (el: T, index: number) => U): U;
}
// const initialValue = 0;
myArray.reduce((acc, value) => acc + value); // 6
myArray.reduce((acc, value) => acc + value, 0); // 6
// myArray.filter((el) => el > 2); // 3

// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

type obgTyp = MyPartial<IHomeTask>

const homeTask: obgTyp = {
    externalData: {
        basis: 1,
        value: 'win'
    }
}
