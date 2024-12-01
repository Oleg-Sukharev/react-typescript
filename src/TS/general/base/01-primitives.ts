let x = 10.5;
let z = NaN;

// begint
// BigInt literals are not available when targeting lower than ES2020
// let y = 11111n;

// string
let str1: string = "Hello";
let symb = Symbol("it is symbol");

// boolean
let bol = true;

// nothing
let h: undefined = undefined;
let n: null = null;

// literal
const num = 100;
const str2 = "str";

// universal
let anyType: any = 1;
anyType = "str";
anyType = {};
anyType.toUpperCase();

let xx: unknown = 2;
if (typeof xx === "string") xx.toUpperCase();
