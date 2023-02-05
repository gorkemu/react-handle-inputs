import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.onTaskAdded = this.onTaskAdded.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.reSubmitTask = this.reSubmitTask.bind(this);
    this.state = {
      tasks: [],
      task: {
        text: '',
        id: uniqid(),
        editing: false
      }
    }
  }
  
  onInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id
      }
    })
  }

  onTaskAdded(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      }
    })
  }
  
  deleteTask(taskId) {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => task.id !== taskId) }))
  }

  reSubmitTask(index, value) {
    let updatedTasks = this.state.tasks.slice();
    updatedTasks[index].text = value;
    this.setState({ tasks: updatedTasks });    
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <form className="input-container" onSubmit={this.onTaskAdded}>
            <input
              className="add-input"
              onChange={this.onInputChange}
              value={this.state.task.text}
              type="text"
              placeholder="Add task"
            ></input>
            <button type="submit">Add</button>
          </form>
          <Overview tasks={this.state.tasks} onDeleteTask={this.deleteTask} reSubmitTask={this.reSubmitTask} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;