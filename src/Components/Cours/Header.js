import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <header className="App-header">
            <img src='https://icon-icons.com/icons2/516/PNG/48/cash_icon-icons.com_51090.png'/>
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