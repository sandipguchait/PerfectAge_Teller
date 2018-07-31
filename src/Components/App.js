import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './Agestats';

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            newDate: '',
            birthday: '1996-09-12',
            showStats: false
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        const newEvent = event.target.value;
        this.setState({newDate: newEvent});
    }

    handleClick(click){
        
    
        this.setState({
            birthday:this.state.newDate,
            showStats: true 
        });
    }

    render(){
        return(
            <div className="App"> 
                <Form inline>
                <h1>Enter Your Birthday!</h1>
                <FormControl 
                type="date"
                onChange = {this.handleChange}
                >
                </FormControl>
                {' '}
                {' '}
                <Button onClick= {this.handleClick}>
                    Submit
                </Button>
                {
                    this.state.showStats ?
                    <div className= "fade age-stats">
                     <AgeStats date = { this.state.birthday} />
                     </div>
                     : 
                     <div></div>
                }
        
                </Form>
             </div>
        )

    }
}

export default App;