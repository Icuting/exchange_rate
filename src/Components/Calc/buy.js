import React from 'react';
import '../App.css';

class Buy extends React.Component{
    constructor(props){
        super(props)
        this.state={
            money : 0,
            currency : 'USD',
            calc: 1,
            prise: 0,
        }
        this.many=this.many.bind(this)
        this.chooseCurrency=this.chooseCurrency.bind(this)
    }
    many(e){
        this.setState({money : e.target.value})
        if(this.state.currency === 'USD'){
            this.setState({calc: this.props.state.USD})
        }if(this.state.currency === 'RUB'){
            this.setState({calc: this.props.state.RUB})
        }if(this.state.currency === 'CNY'){
            this.setState({calc: this.props.state.CNY})
        }
        this.setState({prise: e.target.value/this.state.calc})
    }
    chooseCurrency(e){
        this.setState({currency: e.target.value})
    }
render(){
return (
    <div className='buy-money'>
        <div>
            <h2>Выберите количество и валюту которую хотите купить</h2>
            <input type='number' value={this.state.money} onInput={this.many}/>
            <select onChange={this.chooseCurrency}>
                <option>USD</option>
                <option>CNY</option>
                <option>RUB</option>
            </select>
        </div>
        <div className='buy'>
            <p>Стоимость покупки составит: {this.state.prise.toFixed(2)} EUR</p>
        </div>
    </div>
    );
}
}

export default Buy;
