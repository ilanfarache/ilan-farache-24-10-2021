import React from 'react';
import Item from '../components/Item';
import Header from '../components/Header';
import SearchBar from './../components/SearchBar';
import { useSelector } from 'react-redux';




const Home = () => {


    const city = useSelector((state) => state[0]);
    const cityName = city.LocalizedName;
    const cityKey = city.Key;
   
    return (
        <div>
            <Header />
            <SearchBar />
            {cityName && (<Item cityName={cityName} cityKey={cityKey} />
            )}

        </div>
    );
};

export default Home;