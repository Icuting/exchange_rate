import React from 'react';
import '../App.css';

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='about'>
                <p>Наши контакты:</p>
                <p>8-495760-23-45</p>
                <p>8-995-956-67-77</p>
                <p>Жалобы и предложения принимаются по электронной почте: Helper-rates@mail.ru</p>
            </div>
        )
    }
}
export default About