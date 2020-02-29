import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Buy from './buy';
import Sell from './Sell';
import {NavLink} from 'react-router-dom';

class Calculate extends React.Component{
render(){
return (
    <BrowserRouter>
    <div className="calc">
        <div>
        <ul>
            <NavLink className='b' to='/calc/buy'>Купить</NavLink>
            <NavLink className='b' to='/calc/sell'>Продать</NavLink>
        </ul>
        </div>
        <Route path='/calc/buy' render={ () => <Buy state={this.props.state} />} />
        <Route path='/calc/sell' render={ () => <Sell state={this.props.state} />} />
    </div>
    </BrowserRouter>
    );
}
}

export default Calculate;
