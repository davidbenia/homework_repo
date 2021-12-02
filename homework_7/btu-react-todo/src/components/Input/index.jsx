import React, { Component } from "react";
import "./styles.scss";
import Displayer from "../Displayer/index";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasks: [
        { name: "test task 1", isDone: false, checkbox: false },
        { name: "test task 2", isDone: false, checkbox: false },
        { name: "test task 3", isDone: false, checkbox: false },
      ],
    };
  }

  changeHandler = (event) => {
    if (event.target.value != "")
      this.setState(() => ({ input: event.target.value }));
    else this.setState(() => ({ input: "" }));
  };

  pressHandler = () => {
    this.setState((state) => {
      if (state.input != "")
        state.tasks.push({ name: state.input, isDone: false, checkbox: false });
    });

    this.setState(() => ({ input: "" }));
  };

  doneHandler = (idx) => {
    this.setState((state) => {
      state.tasks[idx].isDone = state.tasks[idx].isDone ? false : true;
    });

    this.forceUpdate();
  };

  deleteHandler = (idx) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((item) => item != state.tasks[idx]),
    }));
  };

  editHandler = (idx) => {
    this.setState((state) => {
      if (state.input != "") {
        state.tasks[idx].name = state.input;
        state.input = "";
      }
    });

    this.doneHandler(idx);
    this.forceUpdate();
  };

  checkHandler = (idx) => {
    this.setState((state) => {
      state.tasks[idx].checkbox = state.tasks[idx].checkbox ? false : true;
    });

    this.forceUpdate();
  };

  positionHandler = (idx, direction) => {
    this.setState((state) => {
      let temp = state.tasks[idx];

      switch (direction) {
        case "up":
          state.tasks[idx] = state.tasks[idx - 1];
          state.tasks[idx - 1] = temp;
          break;

        case "down":
          state.tasks[idx] = state.tasks[idx + 1];
          state.tasks[idx + 1] = temp;
          break;

        default:
          break;
      }

      this.forceUpdate();
    });
  };

  listDeleteHandler = (mode) => {
    switch (mode) {
      case "all":
        this.setState(() => ({ tasks: [] }));
        break;
      case "checked":
        this.setState((state) => ({
          tasks: state.tasks.filter((item) => item.checkbox == false),
        }));
        break;
      case "done":
        this.setState((state) => ({
          tasks: state.tasks.filter((item) => item.isDone == false),
        }));
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="listButtons">
          <button onClick={() => this.listDeleteHandler("all")}>
            Delete All
          </button>
          <button onClick={() => this.listDeleteHandler("checked")}>
            Delete Checked
          </button>
          <button onClick={() => this.listDeleteHandler("done")}>
            Delete Done
          </button>
        </div>

        <div className="Input">
          <textarea
            type="textArea"
            name="input"
            id="input"
            placeholder="Add a todo item..."
            autoComplete="Off"
            onChange={this.changeHandler}
            value={this.state.input}
          />
          <button id="addButton" onClick={this.pressHandler}>
            Add Task
          </button>
        </div>

        <Displayer
          tasks={this.state.tasks}
          handlers={{
            done: this.doneHandler,
            delete: this.deleteHandler,
            edit: this.editHandler,
            check: this.checkHandler,
            move: this.positionHandler,
          }}
        />
      </React.Fragment>
    );
  }
}

export default Input;
