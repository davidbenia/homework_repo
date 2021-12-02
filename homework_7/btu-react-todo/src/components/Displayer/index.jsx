import React from "react";
import "./styles.scss";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const Displayer = (props) => {
  const tasks = props.tasks;

  return (
    <div>
      <ul>
        {tasks.map((task, idx) => (
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
                <button onClick={() => props.handlers.move(idx, "up")}>
                  <AiFillCaretUp />
                </button>
                <button onClick={() => props.handlers.move(idx, "down")}>
                  <AiFillCaretDown />
                </button>
              </div>
              <button onClick={() => props.handlers.done(idx)}>Done</button>
              <button onClick={() => props.handlers.delete(idx)}>Delete</button>
              <button onClick={() => props.handlers.edit(idx)}>Edit</button>
              <input
                type="checkbox"
                checked={task.checkbox}
                onChange={() => props.handlers.check(idx)}
              />
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Displayer;
