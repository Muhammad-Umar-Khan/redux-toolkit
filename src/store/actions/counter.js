export const increment = (inc) => ({
  type: "INCREMENT",
  payload: inc,
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const incrementByAmount = (amount) => ({
  type: "INCREMENTBYAMOUNT",
  payload: {
    amount,
  },
});
