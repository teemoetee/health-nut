import React, { Component } from 'react';
import './App.css';

class MacroCalc extends Component {
    render() {
        var gender = this.props.gender;
        return (
            <div id='output'>
                <div>Gender: {gender}</div><br />
                <div>REE:  {this.props.ree}</div><br />
                <div>TDEE: {this.props.tdee}</div><br />
                <div>Protein: {this.props.protein}</div><br />
                <div>Carbohydrates: {this.props.carbohydrates}</div><br />
                <div>Fat: {this.props.fat}</div><br />
            </div>
        );
    }


} export default MacroCalc;