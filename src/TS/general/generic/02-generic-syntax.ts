type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

export function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("abc", "de");

function head(value: string): string;
function head(value: readonly []): undefined;
function head(value: any): any {
  return value[0];
}

function head<T>(value: readonly T[]): T;

interface ModelData<T> {
  title: string;
  value: T; // number [] boolean
}

const obj1: ModelData<number> = {
  title: "asd",
  value: 12,
};
// obj1.value = true

const obj2: ModelData<Array<number>> = {
  title: "12sad",
  value: [1234],
};
