import React, { Component } from 'react';
import './App.css';
import MacroCalc from './MacroCalc';

const initial_state = {
  gender: '',
  weight: 0,
  height: 0,
  age: 0,
  activity: '',
  ree: 0,
  tdee: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0
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
      newRee = Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5);
    }else if(this.state.gender === 'female') {
      newRee = Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161);
    }
    return newRee;
  }
  calculateTdee = () => {
    var newTdee = 0;
    if(this.state.gender === 'male') {
      newTdee = (Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5) * this.state.activity);
    }else if(this.state.gender === 'female') {
      newTdee = (Number(10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161) * this.state.activity);
    }
    return newTdee;
  }

  render() {
    const weight = this.state.weight;
    const height = this.state.height;
    const age = this.state.age;
    const gender = this.state.gender;
    const ree = this.state.ree;
    const tdee = this.state.tdee;
    const protein = this.state.protein;
    const carbohydrates = this.state.carbohydrates;
    const fat = this.state.fat;

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
            <option value='default'>Select Activity...</option>
            <option value='1.2'>Sedentary</option>
            <option value='1.375'>Lightly Active</option>
            <option value='1.55'>Moderately Active</option>
            <option value='1.725'>Very Active</option>
          </select><br /><br />
        </div>
        <MacroCalc
          gender={gender}
          ree={this.calculateRee()}
          tdee={this.calculateTdee()}
          protein={protein}
          carbohydrates={carbohydrates}
          fat={fat}
        />
      </div>
    );
  }
}

export default App;
