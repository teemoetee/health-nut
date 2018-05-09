import React, { Component } from 'react';
import './css/bootstrap.css';

class MacroCalc extends Component {
    render() {
        var gender = this.props.gender;
        return (
            <div id='container'>
            <h1 class='text-center'>Macronutrients</h1>
            <p class='text-center col-lg-6'></p>
                <div class="jumbotron">
                    <div class="container">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Gender</th>
                                        <th>Ree</th>
                                        <th>TDEE</th>
                                        <th>Protein(g)</th>
                                        <th>Carbohydrates(g)</th>
                                        <th>Fat(g)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{gender}</td>
                                        <td>{this.props.ree}</td>
                                        <td>{this.props.tdee}</td>
                                        <td>{this.props.protein}</td>
                                        <td>{this.props.carbohydrates}</td>
                                        <td>{this.props.fat}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


} export default MacroCalc;