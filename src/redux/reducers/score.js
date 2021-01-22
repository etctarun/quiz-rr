import { SCORE } from "../actions/types";

const initialState = { text: "0" };

const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE:
      return { text: action.payload };
    default:
      return state;
  }
};

export default ScoreReducer;
