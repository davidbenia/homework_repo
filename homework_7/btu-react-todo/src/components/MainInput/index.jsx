import React, { Component } from "react";
import Input from "../Input";
import "./styles.scss";

class MainInput extends Component {
  constructor(props) {
    super(props);

    this.listDeleteHandler = props.mainHandler;
    this.addHandler = props.inputHandler;
  }

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

        <Input method={this.addHandler} argument={""} name={"Add Task"} />
      </React.Fragment>
    );
  }
}

export default MainInput;
