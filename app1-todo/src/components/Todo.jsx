import React from "react";
import App from "../App";
import TodoItem from "./TodoItem";
import TodoDelCheck from "./TodoDelCheck";
import classes from "./UI/TodoInput.module.css"

const Todo = (props, {onChange}) => {
    let checkboxdis = document.getElementsByClassName("checkbox");
    function prover() {
        for (let b = 0; b < checkboxdis.length; b++) {
            console.log(props)
            let c = props.value.map((x, y) => {
                if (checkboxdis[y].checked === true) {
                    x.checks = true
                }
                else if (checkboxdis[y].checked === false) {
                    x.checks = false
                }
                return x;
            })
        }
    }
    function clickFn() {
        prover()
        for (let b in props.value) {
            let par = checkboxdis[b].parentElement;
            if (props.value[b].checks === true) {
                par.style.textDecoration = "line-through"
                par.style.color = "grey"
            } else if (
                props.value[b].checks === false
            ) {
                par.style.color = "white"
                par.style.textDecoration = "none"
            }
            console.log("Изменил")
        }
        prover()
    }
    console.log("Sus1",props.value.id)
    return (
        <div>
            
            <div>
                {props.value.map((a,y) => (
                    <span>
                        {y %2 == 0
                        ? <div className={classes.todo} style={{background:"#950740  "}}>
                        <input type="checkbox" className="checkbox" onChange={clickFn}></input>
                        <span className={classes.tit}>{a.title}</span>
                        <br></br>
                        <span>Описание: {a.text}</span>
                        <TodoDelCheck Todos={a} setTodos={props.valuefn} remove={props.remove} />
                        </div>
                    :<div className={classes.todo} style={{background:"#C3073F "}}>
                    <input type="checkbox" className="checkbox" onChange={clickFn}></input>
                    <span className={classes.tit}>{a.title}</span>
                    <br></br>
                    <span>Описание: {a.text}</span>
                    <TodoDelCheck Todos={a} setTodos={props.valuefn} remove={props.remove} onChange={prover}/>
                    </div>}
                    </span>
                ))}
            </div>
            
        </div>
    );
};

export default Todo;
