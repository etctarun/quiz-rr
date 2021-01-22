import { UANS } from "../actions/types";

const initialState = { uansArr: [] };

const UansReducer = (state = initialState, action) => {
  switch (action.type) {
    case UANS:
      return { uansArr: action.payload };
    default:
      return state;
  }
};

export default UansReducer;
