const x = 16;
const isXNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;
// like ternary operator T is string type we use the first type

type Obj1 = MyRecord<string>;
type Obj2 = MyRecord<number>;

const o1: Obj1 = {
  r: "123",
};

export {};
