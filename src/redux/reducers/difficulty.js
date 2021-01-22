import { DIFFICULTY } from "../actions/types";

const initialState = { text: "Easy" };

const DiffReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIFFICULTY:
      return { text: action.payload };
    default:
      return state;
  }
};

export default DiffReducer;
