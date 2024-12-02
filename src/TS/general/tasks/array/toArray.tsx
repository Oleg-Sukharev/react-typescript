export function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("abc", "de");
