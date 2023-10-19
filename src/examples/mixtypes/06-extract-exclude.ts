export {};

type T0 = Exclude<"a" | "b" | "c", "a">; // b | c
type T1 = Exclude<"a" | "b" | "c", "a" | "b" | "d">; // c

type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>;

type TextStatus = Exclude<Status, number>;

type T00 = Extract<"a" | "b" | "c", "a">; // a
type T10 = Extract<"a" | "b" | "c", "a" | "b" | "d">; //  "a" | "b"

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: "male" | "female";
}

type PersonNames = Extract<keyof Person, "firstName" | "lastName">;

type T01 = NonNullable<string | number | undefined>; //  string | number

type T11 = NonNullable<string[] | null | undefined>; // string[]
