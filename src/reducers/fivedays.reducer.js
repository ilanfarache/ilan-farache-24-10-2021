import { GET_FIVEDAYS  } from "../actions/fivedays.action";

const initialState = {};


export default function fiveDaysReducer(state = initialState, action) {

    switch (action.type) {

        case GET_FIVEDAYS:
        return action.payload
 
        default:
            return state;
    }

    return initialState
}