import Day from './../components/Day'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";


const Item = ({ cityName }) => {


    const days = useSelector((state) => state[1]);
    const weather = useSelector((state) => state[2]);
    const _weather = weather[0];
    const daysArr = days.DailyForecasts;

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle(!toggle)
    }


    const numIcon = _weather.WeatherIcon;
    const degree = _weather.Temperature.Metric.UnitType;

    const urlIcon = `https://www.accuweather.com/images/weathericons/0${numIcon}.svg`;
    const urlIcon2 = `https://www.accuweather.com/images/weathericons/${numIcon}.svg`;


    return (
        <div className="itemContainer">

            <div className="topItem">
                <div>
                    <h2>{cityName}</h2>
                    <span>{degree}°C</span>
                </div>

                {!toggle ? (<div className="topRight" onClick={triggerToggle}>

                    <IconContext.Provider value={{ className: "iconHeart" }}>
                        <div>
                            <HiHeart />
                        </div>
                    </IconContext.Provider>

                    <span className="button" >Add to Favorites</span>


                </div>) : (<div className="topRight" onClick={triggerToggle}>

                    <IconContext.Provider value={{ className: "iconHeart--cheked" }}>
                        <div>
                            <HiHeart />
                        </div>
                    </IconContext.Provider>
                    <span className="button--cheked">Remove to Favorites</span>

                </div>)}

            </div>
            <div className="middleItem">

                <span className="WeatherText"> {_weather.WeatherText} </span>

                {numIcon < 10 ? (<img className="iconBig" src={urlIcon} />) : (<img className="iconBig" src={urlIcon2} />)}
                <span>  {new Date(_weather.LocalObservationDateTime).toDateString()} </span>

            </div>
            <div className="daysList">
                {daysArr.map((day, index) => (
                    <Day day={day} index={index} />

                ))}
            </div>

        </div>
    );
};

export default Item;