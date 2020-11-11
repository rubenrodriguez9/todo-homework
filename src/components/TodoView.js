import React from 'react'
import PropTypes from 'prop-types'
import "./TodoView.css"


const TodoView = ({todoList}) => {
    return (
        <div>
            <ul style={{ listStyle: "none" }} >
          {todoList.map(({id, todo}) => {
           return <li style={{margin: 20}} key={id} > {todo}
           <span className="todo-button-shared-style edit-button" >Edit</span>
           <span className="todo-button-shared-style delete-button" >Delete</span>
            </li>
          })}
        </ul>
        </div>
    )
}

TodoView.propTypes = {

}

export default TodoView
