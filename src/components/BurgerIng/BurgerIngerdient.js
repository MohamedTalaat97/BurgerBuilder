import React from 'react';
import classes from '../BurgerIng/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

export const BurgerIngerdient = (props) => {

    let ingredient = null;

    switch(props.ingredient)
    {   
    case "bread-top":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.BreadTop} key = {i}></div>);
    break;
    case "bread-bottom":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.BreadBottom} key = {i}></div>);
    break;
    case "meat":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Meat} key = {i}></div>);
    break;
    case "cheese":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Cheese} key = {i}></div>);
    break;
    case "salad":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Salad} key = {i}></div>);
    break;
    case "bacon":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Bacon} key = {i}></div>);
    break;

    }
    return ingredient;
};



export default BurgerIngerdient;