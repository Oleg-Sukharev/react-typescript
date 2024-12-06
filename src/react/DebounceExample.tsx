import Card from "@/components/Card";
import useDebounce from "@/hooks/useDebounce";
import { TextField } from "@radix-ui/themes";
import { useState, useEffect, ChangeEvent } from "react";

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Debounced Value:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <Card>
      <TextField.Root
        mb="1rem"
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      >
        <TextField.Slot></TextField.Slot>
      </TextField.Root>

      <p>Debounced Value: {debouncedValue}</p>
    </Card>
  );
};

export default DebounceExample;
