import "./style.scss";
import React from "react";
import ContextItem from "../ContextItem";

const Context = () => {
  return (
    <div className="contextContainer">
      <ul className="itemList">
        <ContextItem
          style={{
            text: { color: "white" },
            background: { backgroundColor: "#0077b6" },
          }}
          item={"Item 1"}
        />
        <ContextItem
          style={{
            text: { color: "white" },
            background: { backgroundColor: "#0096c7" },
          }}
          item={"Item 2"}
        />
        <ContextItem
          style={{
            text: { color: "white" },
            background: { backgroundColor: "#00b4d8" },
          }}
          item={"Item 3"}
        />
        <ContextItem
          style={{
            text: { color: "white" },
            background: { backgroundColor: "#48cae4" },
          }}
          item={"Item 4"}
        />
      </ul>
    </div>
  );
};

export default Context;
