import React, { Component } from 'react';
import './App.css';
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

class MacroCalc extends Component {
    constructor() {
        super();
        this.state = initial_state;
    }
    calculateMacros = () => {
        //calculate macros here :)
    }
    render() {
        return (
            <div id='master'>
                <div id='input'>
                    <label>Gender: </label>
                    <input type='radio' name='gender' value='male' /><label>Male</label><input type='radio' name='gender' value='female' /><label>Female</label><br />
                    <label>Weight(Kg): </label>
                    <input type='text' /><br />
                    <label>Height(Cm): </label>
                    <input type='text' /><br />
                    <label>Age(y): </label>
                    <input type='text' /><br />
                    <label>Activity: </label>
                    <select>
                        <option>Sedentary</option>
                        <option>Lightly Active</option>
                        <option>Moderately Active</option>
                        <option>Very Active</option>
                    </select><br /><br />
                </div>
                <input type='button' value='Submit' onClick={this.calculateMacros}/>
                <div id='output'>
                    <label>REE: </label><br />
                    <label>TDEE: </label><br />
                    <label>Protein: </label><br />
                    <label>Carbohydrates: </label><br />
                    <label>Fat: </label><br />
                    
                </div>

            </div>
        )
    }
} export default MacroCalc;