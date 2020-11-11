import './App.css';
import {v4 as uuidv4} from "uuid"
import TodoView from "./components/TodoView"

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    todoList: [
      {
        id:uuidv4(),
        todo: "clean car",
        editTodoStatus: false
      },
      {
        id:uuidv4(),
        todo: "wash clothes",
        editTodoStatus: false
      },
      {
        id:uuidv4(),
        todo: "study",
        editTodoStatus: false
      }
    ],
    todoValue: "",
    errorMessage: false,
    editTodoValue: "",
    disabler: false
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

  appHandleEditTodoOnClick = (targetID) => {
    let arr = [...this.state.todoList].map((item) => {
      if(targetID === item.id)
      item.editTodoStatus = true
      return item
    })
    this.setState({
      todoList: arr,
      disabler: true
    })
  }

  appHandleEditTodoOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.editTodoValue);
  }

  appHandleUpdateTodo = (targetID) => {
    let arr = [...this.state.todoList].map((item) => {
      if(targetID === item.id){
        item.todo = this.state.editTodoValue
        item.editTodoStatus = false
      }
      return item
      
    })
    this.setState({
      todoList: arr,
      editTodoValue: "",
      disabler: false
    })
  }


  render() {
    return (
      <div style={{textAlign: "center"}} >

        {this.state.errorMessage ? <div>Please enter a todo!</div> : null}
        

        <input  onChange={this.appHandleOnChange} name={"todoValue"} type="text" value={this.state.todoValue} />
        <button  onClick={this.appHandleOnClick} >Submit</button>        
        <TodoView 
          todoList={this.state.todoList}
          appHandleDeleteButton={this.appHandleDeleteButton}
          appHandleEditTodoOnClick={this.appHandleEditTodoOnClick}
          editTodoValue={this.editTodoValue}
          appHandleEditTodoOnChange={this.appHandleEditTodoOnChange}
          appHandleUpdateTodo={this.appHandleUpdateTodo}
          disabler={this.state.disabler}
          
        />
        {this.state.todoList.length === 0 ? <div>No todos active!</div> : null}
      </div>
    )
  }
}
