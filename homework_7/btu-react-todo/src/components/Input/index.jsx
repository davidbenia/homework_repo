import React, { Component } from "react";
import "./styles.scss";

class Input extends Component {
  constructor(props) {
    super(props);

    this.handler = props.method;
    this.handlerName = props.name;
    this.target = props.argument;

    this.state = {
      editing: false,
      input: "",
    };
  }

  changeHandler = (event) => {
    if (event.target.value != "") {
      this.setState(() => ({ input: event.target.value }));
    } else this.setState(() => ({ input: "" }));
  };

  componentDidMount() {
    if (this.target == "") {
      console.log("bruh");
      this.handlerArgument = this.state.input;
    } else {
      this.setState((state) => {
        state.editing = true;
        state.input = this.target.input;
        this.handlerArgument = { idx: this.target.idx, input: state.input };
      });
    }
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.setState((state) => {
        this.handlerArgument = { idx: this.target.idx, input: state.input };
      });
    } else {
      this.handlerArgument = this.state.input;
    }
  }

  render() {
    return (
      <React.Fragment>
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
          <button onClick={() => this.handler(this.handlerArgument)}>
            {this.handlerName}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
