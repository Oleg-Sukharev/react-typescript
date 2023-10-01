interface UserBase {
  name: string;
  age: number;
  role?: boolean;

  // unknown fields
  [key: string]: unknown;
}

const user: UserBase = {
  name: "John Doe",
  age: 30,
};

