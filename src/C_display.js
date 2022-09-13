import React, { Component } from 'react'

class C_Display extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            date: new Date(),
            id: '',
             toggle: true,
             obj: {
                name: "raju",
             }
        };
    }
    


    componentDidMount() {
        console.log("componentdidmount");
         this.id = setInterval(() => {
            console.log("clock");
           this.setState({date:new Date()})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    Increment = () => {
        this.state.value = this.state.value + 1;
        this.setState({ val: this.state.value });
    }

    changeClock = () => {
        console.log("change clock")
        this.id = setInterval(() => {
        }, 1000);
    }

    stopClock = () => {
        clearInterval(this.id);
    }
    nestedobjcng = () =>
    {
        this.setState({obj: {name:"parvej"}})
    }

    render() {
       
        return (
            <div >

                
                <h1>Display the clock</h1>
                <h2>Clock: {this.state.date.toLocaleTimeString()}</h2>

                <div class='hello'>{this.state.obj.name}</div>
                <button onClick={this.nestedobjcng}>Change obj</button>
                

                {/* <button onClick={this.changeClock}>Start Clock</button>
                <button onClick={this.stopClock}>End Clock</button> 



                <h1>{this.state.value}</h1>
                <div><button onClick={this.Increment}>Increment</button></div> */}
            </div>
        )
       
        
    }
}

export default C_Display;