interface UserBase {
  name: string;
  lastUpdated?: Date;

  // unknown fields
  [key: string]: unknown;
}

const user: UserBase = {
  name: "John Doe",
  lastUpdated: new Date(),
};
