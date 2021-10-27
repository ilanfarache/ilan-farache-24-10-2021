import { combineReducers } from "redux";
import cityReducer from "./city.reducer";
import fiveDaysReducer from "./fivedays.reducer";
import weatherReducer from "./weather.reducer";

export default combineReducers([

    cityReducer,
    fiveDaysReducer,
    weatherReducer,
 

])