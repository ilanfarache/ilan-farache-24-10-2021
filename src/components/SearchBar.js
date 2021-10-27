import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCity } from '../actions/city.action';


const SearchBar = () => {

const [city , setCity] = useState('');
const dispatch = useDispatch();

const handleForm = (e) => {
    e.preventDefault();

     if(city){
        const data = city
        dispatch(getCity(data))
     }
}


    return (
        <div className="searchBar">
            <form onSubmit={(e) => handleForm(e)}>
            <input id="search" type="text" placeholder="Search...." value={city} onChange={(e) => setCity(e.target.value)} />
            </form>
            
        </div>
    );
};

export default SearchBar;