import { Button, TextField } from "@mui/material";
import React from "react";
import Counter from "./components/counterApp/Counter";

function App() {
  const [value, setValue] = React.useState<number>(0);
  console.count("value rendered:");

  React.useEffect(() => {
    console.count("useEffect rendered");
    document.title = `You Clicked ${value} times.`;
  }, [value]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      {/* <div>
        <p className="text-3xl">You Clicked {value} times.</p>
        <div className="mt-5 w-[50%] mx-auto">
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={() => setValue((prevValue) => prevValue + 1)}
          >
            Set
          </Button>
        </div>
      </div> */}
      <Counter />
    </div>
  );
}

export default App;
