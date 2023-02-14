import React from "react";
import classes from "./UI/TodoInput.module.css"

const TodoPickAll = (props) => {
    let checkboxdis = document.getElementsByClassName("checkbox");
    function prover() {
        for (let b = 0; b < checkboxdis.length; b++) {
            
            let c = props.value.map((x, y) => {
                if (checkboxdis[y].checked === true) {
                    x.checks = true
                    console.log("Я тут был")
                }
                else if (checkboxdis[y].checked === false) {
                    console.log("Я тут был")
                    x.checks = false
                }
                console.log(props)
                return x;
            })
        }
    }
    function PickAllFn(){
        prover()
    for (let b = 0; b<checkboxdis.length;b++){
        let par = checkboxdis[b].parentElement;
        console.log(b)
        checkboxdis[b].checked = true
        par.style.textDecoration = "line-through";
        par.style.color = "grey"
    }
    prover()
}
    return(
        <button className={classes.myBtn} onClick={PickAllFn} >Выбрать всё</button>
    )
}

export default TodoPickAll;