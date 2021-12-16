import "./style.scss";
import React, { useRef, useState } from "react";
import ContextMenu from "../ContextMenu";

const ContextItem = (props) => {
  const listItemRef = useRef();
  const [rightClicked, setRightClicked] = useState(false);

  return (
    <li
      style={props.style.background}
      className="item"
      ref={listItemRef}
      onContextMenu={(e) => {
        e.preventDefault();
        setRightClicked(e);
      }}
    >
      <p style={props.style.text} className="text">
        {props.item}
      </p>

      <ContextMenu
        parent={listItemRef}
        item={props.item}
        rightClicked={rightClicked}
      />
    </li>
  );
};

export default ContextItem;
