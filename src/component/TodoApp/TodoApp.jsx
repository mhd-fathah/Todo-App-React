import React,{Component} from "react";
import './TodoApp.css'

class TodoApp extends Component {
    render(){
        return (
            <>
                <div className="todo-container">
                    <h1>Todo App</h1>

                    <form className="input-section">
                        <input type="text" placeholder="Enter Items..."/>
                    </form>

                    <ul>
                        <li>hello <i className="fa-solid fa-trash"></i></li>
                        <li>hello <i className="fa-solid fa-trash"></i></li>
                        <li>hello <i className="fa-solid fa-trash"></i></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default TodoApp