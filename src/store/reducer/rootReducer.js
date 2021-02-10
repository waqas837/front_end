import { combineReducers } from "redux";
import {reducer} from "../reducer/reducer";

const reducerMy = combineReducers({
  myreducer:reducer,
});

export default reducerMy;