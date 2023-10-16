function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value,
  };
}

const myPair: FirstArg<typeof fromPair> = ["myKey", "myValue"];
type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
// infer detect passing type T and can refer to it

fromPair(myPair);

// fromPair(myPair as [string,string]);
// not the best option as we can write everything

type ConstructorFirstArg<T> = T extends { new (arg: infer A, ...args: any[]): any } ? A : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = "";

let dateArg: ConstructorFirstArg<typeof Date>;

export {};
