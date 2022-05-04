import { ORDER_DETAILS } from "../actions";

const order_reducer = (state, action) => {
  if (action.type === ORDER_DETAILS) {
    return { ...state };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default order_reducer;
