import React from "react";
import classes from "./UI/TodoInput.module.css"

const TodoDelAll = (props) => {
    
    function DelAll(){
        let checkboxdis = document.getElementsByClassName("checkbox");
        props.value.map((a,y)=>(
            a.checks == false
            ?   props.remove(props.value.filter(
                    function (p, y) {
                    return a.checks === p.checks}
                ))
            : console.log("t")))
            for (let b = 0; b < checkboxdis.length;b++) {
                let par = checkboxdis[b].parentElement;
                par.style.textDecoration = "none";
                par.style.color ="white"
                checkboxdis[b].checked = false
            }

    }

    return(
        <button className={classes.myBtn}
        onClick={DelAll} onChange={props.prover}>Удалить</button>
    )
}

export default TodoDelAll;