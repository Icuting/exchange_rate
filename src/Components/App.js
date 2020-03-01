import React from 'react';
import './App.css';
import Main from './Cours/Main';
import Footer from './Cours/Footer';
import Header from './Cours/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Calculate from './Calc/Calculate';
import About from './about/About';

const nav = {
  main : "курсы валют",
  calc : "Калькулятор покупки/продажи",
  about : "Контакты",
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        time: ' ',
        RUB: ' ',
        USD: ' ',
        CNY: ' ',
    }
    this.getCourse();
}
getCourse=()=>{
    fetch('https://api.exchangeratesapi.io/latest')
    .then( data => {
      return data.json()
    })
    .then( data => {
      console.log(data)
        this.setState({
            time: data.date,
            USD: data.rates.USD,
            RUB: data.rates.RUB,
            CNY: data.rates.CNY,
        })
        
        return data
    })
}
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Header nav={nav} />
      <div className='content'>
          <Route exact  path='/calc' render={ () => <Calculate state={this.state} />} />
          <Route path='/main' render={ () => <Main state={this.state} />} />
          <Route path='/about' render={ () => <About />} />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
