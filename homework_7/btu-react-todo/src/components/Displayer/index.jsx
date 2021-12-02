import React from "react";
import "./styles.scss";

const Displayer = (props) => {
  const tasks = props.tasks;

  return (
    <div>
      <ul>
        {tasks.map((task, idx) => (
          <React.Fragment key={`task ${idx}`}>
            <li>
              <span
                style={
                  task.isDone == false ? { color: "black" } : { color: "red" }
                }
              >
                {task.name}
              </span>
            </li>
            <div className="buttons">
              <div className="positionButtons">
                <button onClick={() => props.handlers.move(idx, "up")}>
                  ^
                </button>
                <button onClick={() => props.handlers.move(idx, "down")}>
                  v
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
