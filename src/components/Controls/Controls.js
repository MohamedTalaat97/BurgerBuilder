import React from 'react'
import Control from './Control'
import classes from './Control.module.css'

export const Controls = (props) => {
    const ingredients_names = Object.keys(props.ingredients);
    const ingredient_values = Object.values(props.ingredients)

    return (
        <div className = {classes.container} >
        {ingredients_names.map(  (ing , index) => <Control  key = {ing} label = {ing}  value ={ingredient_values[index]}  handler ={props.handler} ></Control>)}
        </div>
    )
}

export default Controls;