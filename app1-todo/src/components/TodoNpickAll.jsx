import React from "react";
import classes from "./UI/TodoInput.module.css"

const TodoNpickAll = () => {
    function PickAllFn(){
    let checkboxdis = document.getElementsByClassName("checkbox");

    for (let b in checkboxdis){
        let par = checkboxdis[b].parentElement;
        checkboxdis[b].checked = false
        par.style.textDecoration = "none";
        par.style.color ="white"
    }
}
    return(
        <button className={classes.myBtn} onClick={PickAllFn}>Очистить выбор</button>
    )
}

export default TodoNpickAll;