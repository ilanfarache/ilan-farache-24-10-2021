import React from 'react';

const Day = ({ day }) => {


    const day_name = day.Date;
    const day_phrase = day.Day.IconPhrase;

    const numIcon = day.Day.Icon;

    const urlIcon = `https://www.accuweather.com/images/weathericons/0${numIcon}.svg`;
    const urlIcon2 = `https://www.accuweather.com/images/weathericons/${numIcon}.svg`;

    return (
        <div className="dayContainer" >

            <span>{day_phrase} </span>
            <span>{new Date(day_name).toDateString()}</span>

           {numIcon < 9 ? ( <img className="icon" src={urlIcon} /> ) :  <img className="icon" src={urlIcon2} /> }

        </div>
    );
};

export default Day;