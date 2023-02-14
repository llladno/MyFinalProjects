
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import TodoItem from './components/TodoInput';
import TodoPickAll from './components/TodoPickAll';
import TodoNpickAll from './components/TodoNpickAll';
import classes from "./components/UI/TodoInput.module.css"
import TodoDelAll from './components/TodoDelAll';


function App() {

  const [Todos, setTodos] = useState([
    { id: 1, title: "", text: "Описание", checks: false },
    { id: 2, title: "", text: "Описание", checks: false },
    { id: 3, title: "", text: "Описание", checks: false },
  ])

  const [todoTitle, setTodoTitle] = useState("")

  const [todoText, setTodoText] = useState("")

  const removePost = (post) => {
    setTodos(Todos.filter(
      function (p, y) {
        return post.id !== p.id
      }
    ))
  }
  return (
    <div className='container container2'>
      <div className='center'>
        <div className="App">
          <div className={classes.bar}>
            <TodoItem //Строки задачи и описания
              valuemain={Todos}
              value2={todoText} value={todoTitle}
              valuefn={setTodos}
              fun2={setTodoText} fun={setTodoTitle} />
            <TodoPickAll value={Todos} valuefn={setTodos} //Кнопка выбора всех задач TodoList`а 
            /> 
            <TodoNpickAll /* Очистка выбора всех задач TodoList`а*//>
            <TodoDelAll value={Todos} remove={setTodos} /*Удаление выделеных Todo*/></TodoDelAll>
          </div>
          <Todo value={Todos} check={Todos.checks} valuefn={setTodos} remove={removePost} key={Todos.id} /*Создание Todo задачи*/></Todo>
        </div>
      </div>
    </div>
  );
}

export default App;
