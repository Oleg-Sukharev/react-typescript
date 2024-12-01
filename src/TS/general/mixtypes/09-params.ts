export {};

function f1(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

type T0 = ReturnType<typeof f1>;

type T1 = Parameters<typeof f1>;

type T2 = ConstructorParameters<ErrorConstructor>;

class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>;
// if we pas only Car it will be instance
