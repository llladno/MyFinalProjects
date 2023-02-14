import React from "react";
import classes from "./UI/TodoInput.module.css"



const TodoInput = (props) =>{
    const addTodoTile = event =>{
        if(event.key ==="Enter"){
            console.log("Enter")
            props.valuefn(
            [
                ...props.valuemain,
                {
                id:Date.now(),
                title:props.value,
                text:props.value2,
                checks:false,
                }
            ]
        )}
        console.log(props)
    }
    return(
        <div style={{width:"400px"}}>
                <span className="descript" style={{marginRight:"30px"}}>
                Задача:
                </span>
            <input
            className={classes.inp}
                type='text'
                value={props.value}
                onChange={event => props.fun(event.target.value)}
                onKeyDownCapture={addTodoTile}>
            </input>
            <div></div>
            <span className="descript" style={{marginRight:"8px"}}>
                Описание:
            </span>
            <input className={classes.inp}
                type='text'
                value={props.value2}
                onChange={event =>  props.fun2(event.target.value)}
                onKeyDownCapture={addTodoTile}>
            </input>
            
        </div>
    )
}

export default TodoInput;