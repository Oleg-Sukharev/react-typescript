const arr: number[] = [1, 2, 3];
const moreThanTwo = (x: number) => x > 2;

const filter = <T, R>(arr: T[], func: (value: T, i?: number, arr?: T[]) => R): T[] => {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(typeof func);
    if (func(element)) result.push(element);
  }
  return result;
};

// const result = filter(arr, moreThanTwo); => 3

export {};
