import React, {Fragment} from 'react'
import classes from './Control.module.css'


export const Control = (props) => {
    return (
       <div className = {classes.Control}>
        <button name="more"  disabled = {(props.value +1) <3 ? false :true}  onClick = {() => props.handler(props.label , "more")}>more </button>
        <p>{props.label}</p>
        <button name="less" disabled = {!Boolean(props.value)} onClick = {() => props.handler(props.label , "less")}> less</button>
        </div>
       
    )
}

export default Control;