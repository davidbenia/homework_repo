import "./style.scss";
import { IoIosClose } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";

const Popup = () => {
  const [toggleOpen, setToggleOpen] = useState(true);
  const popupRef = useRef();

  useEffect(() => {
    const hideElement = (e) => {
      if (e.target === popupRef.current) {
        setToggleOpen(false);
      }
    };

    window.addEventListener("click", hideElement);

    return () => {
      window.removeEventListener("click", hideElement);
    };
  });

  return (
    toggleOpen && (
      <div ref={popupRef} className="parentImitation">
        <div className="popupContainer">
          <p>Advertisment</p>
          <button onClick={() => setToggleOpen(false)}>
            <IoIosClose size={"30px"} />
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
