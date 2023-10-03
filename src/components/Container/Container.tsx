import { PropsWithChildren } from "react";
import { mergeClassesUtils } from "@/utils/mergeClassesUtils";

const Box = ({ children }: PropsWithChildren) => {
  return <section className="m-2 border border-black p-2">{children}</section>;
};

type BoxProps = { color?: "text-primary" | "text-secondary" };

const BoxColor = ({ children, color = "text-primary" }: PropsWithChildren<BoxProps>) => {
  return (
    <section className={mergeClassesUtils("m-2 border border-black p-2", color)}>
      Standard practice
      {children}
    </section>
  );
};

const BoxColorAlternative = ({ children, color = "text-primary" }: PropsWithChildren & BoxProps) => {
  return <section className={mergeClassesUtils("m-2 border border-black p-2", color)}>{children}</section>;
};

export const Container = () => {
  return (
    <BoxColor>
      <Box>
        <h2>React component.</h2>
      </Box>
      <BoxColorAlternative>
        <h2>Another React component with one child.</h2>
        <div>...</div>
      </BoxColorAlternative>
    </BoxColor>
  );
};
