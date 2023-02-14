import React from "react";
import classes from "./UI/TodoInput.module.css"

const TodoDelCheck = (props) => {
    return (
        <button className={classes.myBtn2}
        onClick={function(){
            props.remove(props.Todos)}
        } >Удалить</button>
    )
}

export default TodoDelCheck;