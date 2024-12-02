import { average } from "../base/02-functions";

let str = "Hello World";
type X = typeof str;

type FN = typeof average;

const max: FN = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

type ReturnFN = ReturnType<typeof average>;
// detect what function returns in our case it is Number
// as average function return number

export {};
