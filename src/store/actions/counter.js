export const increment = (inc) => {
  return {
    type: "INCREMENT",
    payload: inc,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementByAmount = (amount) => ({
  type: "INCREMENTBYAMOUNT",
  payload: {
    amount,
  },
});
