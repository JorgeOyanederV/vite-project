import { types } from "../types/types";

const initialState = "";

interface newsReducerProps {
  action: {};
  state: {};
}
export const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.login:
      break;

    default:
      return state;
  }
};
