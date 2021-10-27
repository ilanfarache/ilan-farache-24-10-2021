import axios from "axios";


export const GET_FIVEDAYS = "GET_FIVEDAYS";



export const getFiveDays = (cityKey= 215793) => {
    const url ='http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const KEY_API = 'FmzjHpulkPjKbavR6SW07Dw0DFDKHLmd';
    const query = `${cityKey}?apikey=${KEY_API}`

   
   
    return (dispatch) => {
      
        return axios
        .get(url+query)
        .then((res) => {
            dispatch ({ type: GET_FIVEDAYS, payload: res.data});
            
        })
        .catch((err) => console.log(err));
            };
};

