import { GET_CITY } from "../actions/city.action";

const initialState = "tel-aviv";


export default function cityReducer(state = initialState, action) {


    switch (action.type) {
        case GET_CITY:
            return action.payload;
            
        default:
            return state;
    }

    return initialState
}