import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

import './Header.css';




const Header = () => {


    return (
        <div className="header">
            {/* Person Icon */}
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            {/* Tinder Logo */}
            <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" alt="" className="header__logo" />

            {/* Forum Icon */}
             <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
};






export default Header;
