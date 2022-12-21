import { combineReducers } from "redux";
import changeNumber from "./incDec";


const rootReducer = combineReducers({
    changeNumber: changeNumber
})

export default rootReducer;