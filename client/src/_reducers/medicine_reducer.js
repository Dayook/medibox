import { LOAD_MYLOG } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_MYLOG:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
