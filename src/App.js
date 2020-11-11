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
    ]
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
