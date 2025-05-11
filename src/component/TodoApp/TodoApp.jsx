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
      items: [...items, { text: input, completed: false }],
      input: "",
    });
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  toggleComplete = (key) => {
    const updatedItems = [...this.state.items];
    updatedItems[key].completed = !updatedItems[key].completed;
    this.setState({ items: updatedItems });
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
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.toggleComplete(index)}
                />
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
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
