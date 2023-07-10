import { ActionType, UserType } from "../types/type";
import { ACTIONS } from "./actions";

const initialState = {
  users: [],
  admin: {},
};

interface StateType {
  users: Array<UserType>;
  //   admin?: ;
}

export const reducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case ACTIONS.ADMIN_LOGGED_IN:
      return {
        ...state,
        admin: action.payload,
      };
    case ACTIONS.LOG_OUT:
      return {
        ...state,
        admin: {},
      };
    // Handle other action types here
    default:
      return state;
  }
};
