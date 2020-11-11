import './App.css';
import {v4 as uuidv4} from "uuid"
import TodoView from "./components/TodoView"

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
    todoValue: "",
    errorMessage: false
  }

  appHandleOnClick = () =>{

    if(this.state.todoValue.length === 0){
      this.setState({
        errorMessage: true
      })
      return
    }

    let arr = [...this.state.todoList, {id:uuidv4(), todo: this.state.todoValue}]

    this.setState({
      todoList: arr,
      todoValue: ""
    })
    
    
  }

  appHandleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage:false
    })

  }


  appHandleDeleteButton = (targetID) => {
      let arr = [...this.state.todoList].filter(({id}) => {
        return targetID !== id
      })

      this.setState({
        todoList: arr

      })
      
  }

  render() {

    const {todoList} = this.state

    return (
      <div style={{textAlign: "center"}} >

        {this.state.errorMessage ? <div>Please enter a todo!</div> : null}
        

        <input  onChange={this.appHandleOnChange} name={"todoValue"} type="text" value={this.state.todoValue} />
        <button  onClick={this.appHandleOnClick} >Submit</button>        
        <TodoView 
          todoList={todoList}
          appHandleDeleteButton={this.appHandleDeleteButton}
        />
        {this.state.todoList.length === 0 ? <div>No todos active!</div> : null}
      </div>
    )
  }
}
