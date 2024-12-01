// How do we type this ? Well.We have a few choices.
// JSX.Element;: 💩 This doesn't account for arrays (e.g. multiple elements) at all.
// JSX.Element | JSX.Element[]; 😕 This doesn't accept strings.
// React.ReactChildren;: 🤪 Not at even an appropriate type; it's a utility function.
// React.ReactChild[];: 😀 Accepts multiple children, but it doesn't accept a single child.
// React.ReactNode;: 🏆 Accepts everything.

// type PropsWithChildren<P = unknown> = P & {
//   children?: ReactNode | undefined;
// };

import { PropsWithChildren } from "react";

type BoxProps = { color?: "text-primary" | "text-secondary" };

const Container = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

// PropsWithChildren & BoxProps  === PropsWithChildren<BoxProps>
// const Box: React.FC<PropsWithChildren & BoxProps> = ({ color, children }) => (
const Box = ({ children, color = "text-primary" }: PropsWithChildren<BoxProps>) => {
  return <section className={color}>{children}</section>;
};

export default Container;
