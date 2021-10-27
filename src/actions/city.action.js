import axios from "axios";


export const GET_CITY ="GET_CITY";



export const getCity = (city) => {
    const url ='http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const KEY_API = 'FmzjHpulkPjKbavR6SW07Dw0DFDKHLmd';
    const query = `?apikey=${KEY_API}&q=${city}`;
   
   
    return (dispatch) => {
      
        return axios
        .get(url+query)
        .then((res) => {
         
            dispatch ({ type: GET_CITY, payload: res.data[0]});
        })
        .catch((err) => console.log(err));
            };
};



