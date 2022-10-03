import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import store from "../store/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/actions/counter";

export const Counter = () => {
  const [amount, setAmount] = useState(2);

  const count = useSelector((state) => state.counterReducer.value);
  const animals = useSelector((state) => state.counterReducer.animals);
  const dispatch = useDispatch();

  return (
    <div>
      {console.log(store.getState())}
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
