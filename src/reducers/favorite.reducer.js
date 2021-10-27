import { GET_FIVEDAYS  } from "../actions/fivedays.action";

const initialState = {

    id: "1",
    name: "Paris",
    current_weather: "cloud"

};


export default function favoriteReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_FAVORITE:
        return [...state  , action.payload]
 
        default:
            return state;
    }

    return initialState
}