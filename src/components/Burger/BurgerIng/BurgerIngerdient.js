import React from 'react';
import classes from '../BurgerIng/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

export const BurgerIngerdient = (props) => {

    let ingredient = null;

    switch(props.ingredient)
    {   
    case "bread-top":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.BreadTop}></div>);
    break;
    case "bread-bottom":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.BreadBottom}></div>);
    break;
    case "meat":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Meatp}></div>);
    break;
    case "cheese":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Cheese}></div>);
    break;
    case "salad":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Salad}></div>);
    break;
    case "bacon":
    ingredient = [...Array(props.number)].map((e, i) => <div className = {classes.Baconp}></div>);
    break;

    }
    return ingredient;
};



export default BurgerIngerdient;