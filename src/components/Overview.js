import React, { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.onInputChanged = this.onInputChanged.bind(this);

        this.state = {
            editingTaskId: null,
            newText: ''
        }
    }

    onInputChanged(e) {
        this.setState({
            newText: e.target.value,
        }
        )
    }

    render() {
        const { tasks, onDeleteTask, reSubmitTask } = this.props;

        return (
            <div className="all-lists">
                {tasks.map((task, i) => {
                    let button;
                    if (task.id === this.state.editingTaskId) {
                        button = <button className="resubmit-btn" onClick={() => {
                            reSubmitTask(i, this.state.newText);
                            this.setState({
                                editingTaskId: null,
                                newText: ''
                            })
                        }}>Resubmit</button>
                    } else {
                        button = <button onClick={() => {
                            this.setState({
                                editingTaskId: task.id
                            })
                        }}>Edit</button>
                    }

                    return (
                        <div className="item-container" key={task.id}>
                            {task.id === this.state.editingTaskId ? (
                                <input
                                className="edit-input"
                                onChange={this.onInputChanged}
                                value={this.state.newText}
                                placeholder={this.props.tasks[i].text}
                                type="text"></input>
                            ) : (
                                <p>{i + 1}. {task.text}</p>)}
                            <div className="btns-container">
                                <button onClick={() => {
                                    onDeleteTask(task.id)
                                }}>Delete</button>
                                {button}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Overview;