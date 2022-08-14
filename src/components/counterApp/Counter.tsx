import { Button, TextField } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from ".././../redux/states/counter/counterSlice";

function Counter() {
  const count = useSelector((state: any) => state?.counter?.value);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = React.useState<number>(0);
  console.log("userInput:", userInput);
  console.log("Counter:", count);

  function onHandleChange(e: any) {
    setUserInput(Number(e.target.value));
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-300">
      <div className="w-[40%] h-[60%]">
        <div className="bg-blue-500 rounded-t-lg text-white text-2xl font-bold px-5 py-3">
          <h1>Counter</h1>
        </div>
        <div className="rounded-b-lg bg-white h-[70%] p-5">
          <p className="text-3xl font-bold text-blue-600">{count}</p>
          <div className="flex justify-start mt-5">
            <div className="mr-3">
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(increment())}
              >
                Increase
              </Button>
            </div>
            <Button
              variant="contained"
              size="small"
              onClick={() => dispatch(decrement())}
            >
              Decrease
            </Button>
          </div>
          <div className="mt-5">
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={userInput}
              onChange={(
                evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => onHandleChange(evt)}
            />
          </div>
          <div className="mt-5 w-[50%]">
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={() => dispatch(incrementByAmount(userInput))}
            >
              Set
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
