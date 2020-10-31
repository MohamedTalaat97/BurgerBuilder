import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIng/BurgerIngerdient'

 const Burger = (props) => {
    const ingArray = Object.keys(props.ingredients);
    const numArray = Object.values(props.ingredients)
    let empty = numArray.every(val => val === 0 )  
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient ingredient= 'bread-top' number = {1} />
            { empty ? <p> Add Ingredients</p> :ingArray.map((ing, i) => <BurgerIngredient ingredient = {ing}  number = {numArray[i]} />)}
            <BurgerIngredient ingredient= 'bread-bottom'  number = {1} />
        </div>
    )
}
export default Burger;