import React, {
  Component,
  Fragment
} from 'react'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Controls/Controls'

export default class BurgerBuilder extends Component {

  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    price: 0,
    full: false
  }



  ingredientsChangeHandler = (ing,type) => {
    console.log(this.state)

    let newIngredients = {...this.state.ingredients};
     newIngredients[ing] = type == "more" ? newIngredients[ing] +1 : newIngredients[ing] -1;
    let newFull = this.state.full
    newFull = Object.values(newIngredients).reduce((accumulator, currentValue) => accumulator + currentValue) >=8 ? true : false;
     this.setState({ingredients : newIngredients, full : newFull});


  }

  render() {
    return ( <Fragment >
      <Burger ingredients = {this.state.ingredients} > </Burger> 
      <Controls ingredients = {this.state.ingredients}  handler = {this.ingredientsChangeHandler}></Controls>
      </Fragment>
    )
  }
}