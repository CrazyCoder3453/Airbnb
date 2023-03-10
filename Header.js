import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <img className='header_icon'
        src='https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
        />

        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Header