import React from "react";
import './Header.css'
import logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (
    <div className="header">
      <Link to="/home" className="logo">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
        
      <div className="header-left">
        <Link to="/home">Pokemons</Link>
      </div>
      <div className="header-right">
        <Link to="/">Sair</Link>
      </div>
    </div>
  );
};

export default Header;
