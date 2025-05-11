import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input, items } = this.state;

    this.setState({
      items: [...items, input],
      input: "",
    });
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;

    return (
      <>
        <div className="todo-container">

          <h1>Todo App</h1>

          <form className="input-section" onSubmit={this.storeItems}>
            <input
              type="text"
              placeholder="Enter Items..."
              value={input}
              onChange={this.handleChange}
            />
          </form>

          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}{" "}
                <i
                  onClick={() => this.deleteItem(index)}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoApp;
