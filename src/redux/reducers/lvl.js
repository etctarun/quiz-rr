import { DIFFLVL } from "../actions/types";

const initialState = { lvlArr: [] };

const LvlReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIFFLVL:
      return { lvlArr: action.payload };
    default:
      return state;
  }
};

export default LvlReducer;
