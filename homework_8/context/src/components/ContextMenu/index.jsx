import "./style.scss";
import React, { useState, useEffect } from "react";

const ContextMenu = (props) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleEdit = () => {
    console.log("edit");
    setToggleOpen(false);
  };
  const handleDelete = () => {
    console.log("delete");
    setToggleOpen(false);
  };

  useEffect(() => {
    props.rightClicked && setToggleOpen(true);
  }, [props.rightClicked]);

  useEffect(() => {
    const hideMenu = (e) => {
      const parent = props.parent.current;

      if (parent.contains(e.target)) {
        e.preventDefault();
      } else {
        setToggleOpen(false);
      }
    };

    window.addEventListener("click", hideMenu);

    return () => {
      window.removeEventListener("click", hideMenu);
    };
  });

  return (
    toggleOpen && (
      <div className="contextMenu">
        <p className="text">{props.item}</p>

        <div className="buttonContainer">
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default ContextMenu;
