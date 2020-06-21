import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ToDoItem from "./ToDoItem"
import './style.css'

function App() {
    return (
        <div>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}

export default App
