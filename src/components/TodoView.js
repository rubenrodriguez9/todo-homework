import React from 'react'
import PropTypes from 'prop-types'
import "./TodoView.css"


const TodoView = ({todoList, appHandleDeleteButton, appHandleEditTodoOnClick, editTodoValue, appHandleEditTodoOnChange, appHandleUpdateTodo, disabler}) => {
    return (
        <div>
            <ul style={{ listStyle: "none" }} >
          {todoList.map(({id, todo, editTodoStatus}) => {
           return <li style={{margin: 20}} key={id} > 

            {editTodoStatus ? <input onChange={(event) => appHandleEditTodoOnChange(event)} type="text" name="editTodoValue" value={editTodoValue} /> : <span>{todo}</span> }
            {editTodoStatus ? <span onClick={() => appHandleUpdateTodo(id)} className="todo-button-shared-style edit-button" >Update</span> : <span className={`todo-button-shared-style edit-button ${disabler ? "disabled" : ""}`} onClick={() => appHandleEditTodoOnClick(id)}  >Edit</span>}


           <span onClick={() => appHandleDeleteButton(id)} className={`todo-button-shared-style delete-button ${disabler ? "disabled" : ""}`} >Delete</span>
            </li>
          })}
        </ul>
        </div>
    )
}

TodoView.propTypes = {

}

export default TodoView
