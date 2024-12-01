type MyBoolean = false | true;

type Pair = [string, string];
type Pairs = Pair[];

type DiffUser = {
  name: number;
  surname?: string;

  [key: string]: unknown;
};
