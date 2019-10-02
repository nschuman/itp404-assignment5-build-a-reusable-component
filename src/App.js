import React from 'react';
import IsUserNameValid from './IsUserNameValid'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userName:'',
      takenUserNames:['tommytrojan1','itpstudent2','nschuman3'],
      nameMinLength:5,
    };
  }
  handleChange = (event) =>{
    console.log("It worked");
    this.setState({
      userName: event.target.value
    });
  }
  render(){
    return(
      <div>
      <p>Please enter a username according to the guidelines below</p>
      <input value={this.state.userName} onChange={this.handleChange}/> 
      <IsUserNameValid text={this.state.userName} array={this.state.takenUserNames} length={this.state.nameMinLength}/>
      <p>I believe that this component will be useful for developers making a site that requires users to register a username. My motivations for making this component come from my experince with my final project for itp 303. I had to make a site involving registration, and I found it cumbersome to make it without react. Developers can use this component on essentially any site involving username registration. I decided to give the props generic names like text, array, and length to ensure that this component has reusability for different fields. In terms of the name IsUserNameValid, I feel that this is a descriptive enough title to help developers understand what exactly my component does.</p> 
      </div>
      );
  }
}

