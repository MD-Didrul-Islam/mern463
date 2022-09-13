import './app.css'
import Display from './f_display';
import C_Display from './C_display';
import React, { Component } from 'react'

export class App extends Component {
  constructor()
  {
    super();
    this.state= {
      toggle: true,
    }
  }

  changetoggle =() => 
    {
        this.setState({toggle: !this.state.toggle});
    }
  render() {
    if(this.state.toggle)
    {
      return (
        <div>
          <C_Display/>
        <button onClick={this.changetoggle}>change</button>
        </div>
      )
    }
    else{
      return(
        <div>
        <div>no values</div>
        <button onClick={this.changetoggle}>change</button>
        </div>
      )
     
    }
    
  }
}

export default App