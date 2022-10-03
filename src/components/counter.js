import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/actions/counter";
import { useSelector } from "react-redux";

export const Counter = () => {
  const [amount, setAmount] = useState(2);

  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>incerement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <input onChange={(e) => setAmount(e.target.value)} value={amount}></input>
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        IncrementByAmount
      </button>
    </div>
  );
};
