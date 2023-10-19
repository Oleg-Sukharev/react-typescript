export {};

type WellKnownBrands = "apple" | "lenovo";

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

type BrandNamesOptional = Partial<BrandNames>; //make all properties optional

const myBrands: BrandNamesOptional = {
  apple: "sasd",
};

interface Todo {
  id: string;
  title: string;
  description: string;
}

type SimpleTodo = Pick<Todo, "id" | "title">;

const todo1: SimpleTodo = {
  id: "sad",
  title: "LEarn TS",
};

type SimpleTodoNEw = Omit<Todo, "id">;
// Omit === skip === miss
