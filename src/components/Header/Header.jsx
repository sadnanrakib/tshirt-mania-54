import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <Link to='/'>Home</Link> 
           <Link to='/Orders'>Orders</Link> 
           <Link to='/about'>About</Link> 
        </nav>
    );
};

export default Header;