export {};

interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      description: string;
      links: string[];
    };
    footer: {
      description: string;
      links: string[];
    };
    body: [
      {
        title: string;
        content: object;
      },
    ];
  };
}

type T0 = DataModel["elements"]["footer"];

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, "asd", true, "", ""];

type T1 = someTuple[1];

const sizes = ["small", "medium", "large"] as const;

type T2 = (typeof sizes)[number];
