import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navContainer">

                <div className="leftNav">
                 <h1>Herolo Home Assignment</h1>
                </div>
                <div className="rightNav">

                <NavLink to="/">Home</NavLink>

                <NavLink  to="/favorites">Favorites</NavLink>

                </div>
               
            </div>


        </>
    );
};

export default Header;