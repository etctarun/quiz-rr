import { createStore, combineReducers } from "redux";

import DiffReducer from "./reducers/difficulty";
import CansReducer from "./reducers/cans";
import LvlReducer from "./reducers/lvl";
import ScoreReducer from "./reducers/score";
import UansReducer from "./reducers/uans";

const rootReducer = combineReducers({
  difficulty: DiffReducer,
  lvl: LvlReducer,
  cans: CansReducer,
  uans: UansReducer,
  score: ScoreReducer,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
