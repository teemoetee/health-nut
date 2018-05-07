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
                <div><b><em>Protein:</em></b> {this.props.protein}</div><br />
                <div><b><em>Carbohydrates:</em></b> {this.props.carbohydrates}</div><br />
                <div><b><em>Fat:</em></b> {this.props.fat}</div><br />
            </div>
        );
    }


} export default MacroCalc;