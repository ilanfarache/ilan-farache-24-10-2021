import { GET_WEATHER } from "../actions/weather.action";

const initialState = {type : "weather"};


export default function weatherReducer(state = initialState, action) {

    switch (action.type) {

        case GET_WEATHER:
        return action.payload;
 
        default:
            return state;
    }

    return initialState
}