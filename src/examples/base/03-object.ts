interface UserBase {
  name: string;
  age: number;
  role?: boolean;
  lastUpdated?: Date;

  // unknown fields
  [key: string]: unknown;
}

const user: UserBase = {
  name: "John Doe",
  age: 30,
  lastUpdated: new Date()
};

