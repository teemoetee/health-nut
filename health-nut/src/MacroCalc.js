import React, { Component } from 'react';
import './css/bootstrap.css';
//stateless component
class MacroCalc extends Component {
    render() {
        var gender = this.props.gender;
        return (
            <div class='container-fluid'>
                <div class='container'>
                    <h1 class='text-left'>Macronutrients</h1>
                    <p class='text-left'><b><em>Macronutrients</em></b>, for humans, are <em>protein, carbohydrates, and fats. They each have their own roles to play in the body and supply us with calories and this is what our body uses to grow, develop, and repair! The ammount of these macros that we eat, coupled with our activity level, can also determin how we store this energy.</em></p><hr />
                    <p class='text-left text-warning'>Please take into account that everyone's body is different. The results provided should only be interpreted as a general starting point. It is our reccomendation that you try it out and make changes as necessary.</p><hr />
                </div>
                <div class="jumbotron">
                    <div class="container">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Ree(cal)</th>
                                        <th>TDEE(cal)</th>
                                        <th>Protein(g)</th>
                                        <th>Carbohydrates(g)</th>
                                        <th>Fat(g)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
                <div class='container'>
                <p class='text-center'><h4>Here is a bit of information you will need to decipher the information above!<hr /></h4></p>
                <p class='text-left'>
                    <h5 class='text-success'>Input:</h5><br />
                    <b class='text-warning'>Goal:</b>
                    <dl>Lose Weight - This will put you in a 20% calorie deficit to promote healthy weight loss.</dl>
                    <dl>Maintain Weight - This will allow you to eat at macro levels that will help you maintain your current weight.</dl>
                    <dl>Gain Muscle - This will put you in a 20% calorie surplus, this should only be selected if you are going to pair your diet with a comprehensive workout program and want to gain muscle fast. This can also be used by people who are underweight.</dl>
                    <b class='text-warning'>Weight - </b>This is your current weight in kilograms, or <em>weight in pounds</em> % <em>2.2</em>. This is a pretty important number, so keep track of it and keep it updated as you progress toward your goals!<br /><br />
                    <b class='text-warning'>Height - </b>This is your height is centimeters, or your <em>height in inches</em> X <em>2.54</em>.<br /><br />
                    <b class='text-warning'>Age - </b>This one is pretty simple too, just your age in years, you got this!<br /><br />

                    <h5 class='text-success'>Output:</h5><br />
                    <b class='text-warning'>REE - </b>This is the approximate number of calories you will use in any given day just existing doing nothing at all.<br /><br />
                    <b class='text-warning'>TDEE - </b>This is the approximate number of calories you should consume based on your current REE, weight, height, age, activity level, and goals. This is a pretty important number too, so keep track of it and keep it updated as well!<br /><br />
                    <b class='text-warning'>Protein(4cal/1g) - </b>For our purposes, this is going to be .825 grams of protein per lb of body weight.<br /><br />
                    <b class='text-warning'>Fat(9cal/1g) - </b>For our purposes, this is going to be 25% of your TDEE.<br /><br />
                    <b class='text-warning'>Carbohydrates(4cal/1g) - </b>For our purposes, this will be composed of the remainder of the TDEE.<br /><br />
                </p>
                </div>
            </div>
        );
    }


} export default MacroCalc;