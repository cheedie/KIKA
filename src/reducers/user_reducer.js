import { REGISTER_USER_FAILED, REGISTER_USER } from "../actions";

const user_reducer = (state, action) => {
  if (action.type === REGISTER_USER) {
    return { ...state, register_user: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
