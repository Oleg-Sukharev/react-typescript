const arr: number[] = [1, 2, 3];
const square = (x: number) => x * x;

function map<T, R>(arr: T[], func: (value: T, i?: number, arr?: T[]) => R): R[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = func(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}
const squaredNumbers = map(arr, square);

console.log(squaredNumbers);

export {};
