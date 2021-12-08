import React, { Component } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import "./styles.scss";
import MainInput from "../MainInput/index";
import Input from "../Input";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      target: { idx: null, input: null },
      tasks: [
        { name: "test task 1", isDone: false, checkbox: false },
        { name: "test task 2", isDone: false, checkbox: false },
        { name: "test task 3", isDone: false, checkbox: false },
      ],
    };
  }

  addHandler = (name) => {
    let item = { name: name, isDone: false, checkbox: false };

    this.setState((state) => {
      if (state.tasks.filter((task) => task.name == item.name).length > 0)
        alert("Task already exists...");
      else if (item.name != "") state.tasks.push(item);
    });

    this.forceUpdate();
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

  editHandler = (target) => {
    this.setState((state) => {
      state.tasks[target.idx].name = target.input;
      state.tasks[target.idx].isDone = false;
      state.editing = !state.editing;
    });

    this.forceUpdate();
  };

  editHelperMethod = (idx) => {
    this.setState((state) => {
      state.editing = !state.editing;
      state.target = { idx: idx, input: state.tasks[idx].name };
    });

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
          if (idx - 1 < 0) alert("Can't move the task");
          else {
            state.tasks[idx] = state.tasks[idx - 1];
            state.tasks[idx - 1] = temp;
          }

          break;

        case "down":
          if (idx + 1 == state.tasks.length) alert("Can't move the task");
          else {
            state.tasks[idx] = state.tasks[idx + 1];
            state.tasks[idx + 1] = temp;
          }

          break;

        default:
          break;
      }
    });

    this.forceUpdate();
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
        <div>
          <MainInput
            mainHandler={this.listDeleteHandler}
            inputHandler={this.addHandler}
          />
          {this.state.editing ? (
            <Input
              method={this.editHandler}
              name={"Edit Task"}
              argument={this.state.target}
            />
          ) : (
            <div></div>
          )}
          <ul>
            {this.state.tasks.map((task, idx) => (
              <React.Fragment key={`task ${idx}`}>
                <li>
                  <span
                    id="Text"
                    style={
                      task.isDone == false
                        ? { color: "black", backgroundColor: "white" }
                        : { color: "white", backgroundColor: "red" }
                    }
                  >
                    {task.name}
                  </span>
                </li>
                <div className="buttons">
                  <div className="positionButtons">
                    <button onClick={() => this.positionHandler(idx, "up")}>
                      <AiFillCaretUp />
                    </button>
                    <button onClick={() => this.positionHandler(idx, "down")}>
                      <AiFillCaretDown />
                    </button>
                  </div>
                  <button onClick={() => this.doneHandler(idx)}>Done</button>
                  <button onClick={() => this.deleteHandler(idx)}>
                    Delete
                  </button>
                  <button onClick={() => this.editHelperMethod(idx)}>
                    Edit
                  </button>
                  <input
                    type="checkbox"
                    checked={task.checkbox}
                    onChange={() => this.checkHandler(idx)}
                  />
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemList;
