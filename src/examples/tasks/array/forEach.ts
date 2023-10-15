const arr: number[] = [1, 2, 3];
const square = (x: number) => x * x;

function forEach<T, R>(arr: T[], func: (value: T, i?: number, arr?: T[]) => R): void {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

forEach(arr, square);

console.log(arr, "arr");

export {};
