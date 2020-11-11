import './App.css';
import {v4 as uuidv4} from "uuid"


import React, { Component } from 'react'

export default class App extends Component {

  state = {
    todoList: [
      {
        id:uuidv4(),
        todo: "clean car"
      },
      {
        id:uuidv4(),
        todo: "wash clothes"
      },
      {
        id:uuidv4(),
        todo: "study"
      }
    ],
    todoValue: ""
  }

  appHandleOnClick = () =>{

    let arr = [...this.state.todoList, {id:uuidv4(), todo: this.state.todoValue}]

    this.setState({
      todoList: arr,
      todoValue: ""
    })
    
    
  }

  appHandleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
console.log(this.state.todoValue);
  }

  render() {

    const {todoList} = this.state

    return (
      <div>

        <input onChange={this.appHandleOnChange} name={"todoValue"} type="text" value={this.state.todoValue} />
        <button onClick={this.appHandleOnClick} >Submit</button>        
        <ul>
          {todoList.map(({id, todo}) => {
           return <li key={id} > {todo} </li>
          })}
        </ul>
        
      </div>
    )
  }
}
