import React, { Component } from 'react';
import './App.css';
import MacroCalc from './MacroCalc';

const initial_state = {
  gender: '',
  weight: 0,
  height: 0,
  age: 0,
  activity: 1,
  goal: 0
}

class App extends Component {
  constructor() {
    super();
    this.state = initial_state;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  calculateRee = () => {
    var newRee = 0;
    if(this.state.gender === 'male') {
      newRee = Math.round(Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5));
    }else if(this.state.gender === 'female') {
      newRee = Math.round(Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161));
    }
    return newRee;
  }
  calculateTdee = () => {
    var newTdee = 0;
    if(this.state.gender === 'male') {
      newTdee = Math.round((Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5) * this.state.goal) * this.state.activity);
    }else if(this.state.gender === 'female') {
      newTdee = Math.round((Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161) * this.state.goal) * this.state.activity);
    }
    return newTdee;
  }
  calculateProtein = () => {
    var newProtein = 0;
    newProtein = Math.round(Number((this.state.weight * 2.2) * .825));
    return newProtein;

  }
  calculateFat = () => {
    //calculate fat
    var newFat = 0;
    var calcTdee = this.calculateTdee();
    newFat = Math.round(Number(calcTdee * .25) / 9);
    return newFat;
  }
  calculateCarbohydrates = () => {
    //calculate carbs
    var newCarb = 0;
    var calcTdee = this.calculateTdee();
    var calcPro = this.calculateProtein();
    var calcFat = this.calculateFat();
    newCarb = Math.round(Number(calcTdee - (calcPro * 4) - (calcFat * 9)) / 4);
    return newCarb;
  }

  render() {
    const gender = this.state.gender;
    
    return (
      <div id='master'>
        <div id='input'>
          <label>Gender: </label>
          <select name='gender' value={this.state.gender} onChange={this.handleChange}>
            <option value=''>Select Gender...</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select><br />
          <label>Weight(Kg): </label>
          <input type='text' name='weight' onChange={this.handleChange} /><br />
          <label>Height(Cm): </label>
          <input type='text' name='height' onChange={this.handleChange} /><br />
          <label>Age(y): </label>
          <input type='text' name='age' onChange={this.handleChange} /><br />
          <label>Activity: </label>
          <select name='activity' value={this.state.activity} onChange={this.handleChange}>
            <option value='1'>Select Activity...</option>
            <option value='1.2'>Sedentary</option>
            <option value='1.375'>Lightly Active</option>
            <option value='1.55'>Moderately Active</option>
            <option value='1.725'>Very Active</option>
          </select><br />
          <label>Goal: </label>
          <select name='goal' value={this.state.goal} onChange={this.handleChange}>
          <option value='1'>Select Goal...</option>
          <option value='.8'>Lose Weight</option>
          <option value='1'>Maintain Weight</option>
          <option value='1.2'>Gain Muscle</option>
          </select><br /><br />
        </div>
        <MacroCalc
          gender={gender}
          ree={this.calculateRee()}
          tdee={this.calculateTdee()}
          protein={this.calculateProtein()}
          carbohydrates={this.calculateCarbohydrates()}
          fat={this.calculateFat()}
        />
      </div>
    );
  }
}

export default App;
