type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

interface ModelData<T> {
  title: string;
  value: T;
}

const obj1: ModelData<number> = {
  title: "title",
  value: 12,
};

const obj2: ModelData<Array<number>> = {
  title: "title",
  value: [1234],
};

export {};
