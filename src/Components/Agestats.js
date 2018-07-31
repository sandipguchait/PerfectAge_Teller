import React from 'react';
import party from '../assets/party.jpg';

class AgeStats  extends React.Component {

    birthDate(date){
        let todayDate = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let difference = Math.abs(todayDate - otherDate);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor( days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;

        return `${years} years, ${months} months, ${days} days`
    }
    render(){
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats On {this.birthDate(this.props.date)} ! </h4>
                <img src = {party} alt ="party-popper" className="party-popper"/>
            </div>
        )
    }
}
export default AgeStats;