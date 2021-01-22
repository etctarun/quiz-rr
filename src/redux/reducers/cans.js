import { CANS } from "../actions/types";

const initialState = { cansArr: [] };

const CansReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANS:
      return { cansArr: action.payload };
    default:
      return state;
  }
};

export default CansReducer;
