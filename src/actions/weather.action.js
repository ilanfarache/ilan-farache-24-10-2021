import axios from "axios";

export const GET_WEATHER = "GET_WEATHER";



export const getWeather = (cityKey = 215793) => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const KEY_API = 'FmzjHpulkPjKbavR6SW07Dw0DFDKHLmd';
    const query = `${cityKey}?apikey=${KEY_API}`

    return (dispatch) => {


        return axios
            .get(url + query)
            .then((res) => {
                dispatch({ type: GET_WEATHER, payload: res.data });
                
            })
            .catch((err) => console.log(err));

            
    };
    
};



