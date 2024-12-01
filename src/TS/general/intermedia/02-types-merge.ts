type Union1 = "a" | "b" | "c";
type Union2 = "a" | "d";
type Union3 = Union1 | Union2; // concatenating  all variants
type Union4 = Union1 & Union2; // concatenating only common fields  -> a

type Union5 = { a: string; b: string } & { a: string; c: boolean };

// using & with object with concatenating all fields  -> a,b,c
const withObjectExample: Union5 = {
  a: "string",
  b: "string",
  c: true,
};

type User = {
  readonly login: string;
};

type Person = {
  firstName: string;
};

type Employee = {
  contractStart: Date;
} & User &
  Person;

type Developer = {
  skills: string[];
} & Employee;

export {};
