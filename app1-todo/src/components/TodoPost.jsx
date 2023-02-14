import React from "react";
import classes from "./UI/TodoInput.module.css"

const TodoPost = (props) => {
    return (
        <div className={classes.todo}>
            <input type="checkbox" className="checkbox" onChange={clickFn}></input>
            <span>{a.title}</span>
            <br></br>
            <span>Описание: {a.text}</span>

        </div>
    )
}

export default TodoPost;