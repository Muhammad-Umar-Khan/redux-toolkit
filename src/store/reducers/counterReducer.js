const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        value: state.value > 0 ? state.value - 1 : 0,
      };
    case "INCREMENTBYAMOUNT":
      return {
        value: state.value + action.payload.amount,
      };
    default:
      return state;
  }
};
export default counterReducer;
