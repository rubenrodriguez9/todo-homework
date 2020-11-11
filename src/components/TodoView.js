import React from 'react'
import PropTypes from 'prop-types'

const TodoView = ({todoList}) => {
    return (
        <div>
            <ul>
          {todoList.map(({id, todo}) => {
           return <li key={id} > {todo} </li>
          })}
        </ul>
        </div>
    )
}

TodoView.propTypes = {

}

export default TodoView
