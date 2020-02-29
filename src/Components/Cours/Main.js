import React from 'react';
import '../App.css';

class Main extends React.Component{
render(){
    console.log(this.props)
return (
    <div className="main">
        <h2>Вам представлен курс в EUR на {this.props.state.time}</h2>
        <div className="price">
            <div className='course'>Курс доллара: {this.props.state.USD} USD</div>
            <div className='course'>Курс рубля: {this.props.state.RUB} RUB</div>
            <div className='course'>Курс Юаней: {this.props.state.CNY} CNY</div>
        </div>
    </div>
);
}
}

export default Main;