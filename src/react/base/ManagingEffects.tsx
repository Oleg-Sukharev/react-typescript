import { Button } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const GREETINGS: string[] = ["Hello", "Hola"];

const ManagingEffects: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (): void => {
    const nextIndex = GREETINGS.length - 1 === index ? 0 : index + 1;
    setIndex(nextIndex);
    window.localStorage.setItem("index", String(nextIndex));
  };

  useEffect(() => {
    const savedIndex = window.localStorage.getItem("index");
    if (savedIndex) setIndex(Number(savedIndex));
  }, []);

  return <Button onClick={handleClick}>{GREETINGS[index]}</Button>;
};

export default ManagingEffects;
