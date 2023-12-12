import { combineReducers } from "redux";
// 여러개의 리듀서를 합쳐주는 함수
import countReducer from "./countReducer";
import isDataReducer from "./isDataReducer";
const rootReducer =combineReducers({
    counter:countReducer,
    isData: isDataReducer,
});
export default rootReducer;

