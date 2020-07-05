import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import logo from '../../image/logo.png';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <header className="App-header">
            <img className="logo" src={logo}/>
            <div className="menu">
                <ul>
                    <NavLink className='li' to='/main'>Главная</NavLink>
                    <NavLink className='li' to='/calc'>Калькулятор валюты</NavLink>
                    <NavLink className='li' to='/about'>Контакты/о нас</NavLink>
                </ul>
            </div>
        </header>
        )
    }
}
export default Header