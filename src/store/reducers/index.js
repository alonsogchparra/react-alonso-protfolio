import { combineReducers } from "redux";
import themeReducer from "./theme";
import translateReducer from "./translate";

export default combineReducers({
  theme: themeReducer,
  translate: translateReducer,
});
