import React, { useRef } from "react";

const Contact = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(textRef.current.innerHTML);

    let original = buttonRef.current.value;
    buttonRef.current.value = "Copied";
    setTimeout(() => {
      buttonRef.current.value = original;
    }, 500);
  };

  return (
    <div className="content bg-slate-400 rounded-lg h-3/4 w-4/5">
      <h1 className="text-white text-4xl mx-48 text-center mt-5 bg-slate-500 p-10 rounded-full">
        My Contacts
      </h1>
      <div className="bg-slate-500 text-white mx-5 mt-10 p-10 text-xl rounded">
        <div className="grid gap-y-2">
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://www.linkedin.com/in/david-benia-131632226"
          >
            LinkedIn
          </a>
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://www.facebook.com/david.benia.37"
          >
            Facebook
          </a>
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://github.com/davidbenia"
          >
            GitHub
          </a>
        </div>
        <p className="bg-slate-600 p-2 mt-2">
          <span ref={textRef}>david.benia.1@btu.edu.ge</span>
          <input
            className="bg-slate-700 py-2 px-3 ml-5 hover:bg-slate-500"
            onClick={copyEmail}
            ref={buttonRef}
            type="button"
            value="Copy Email"
          ></input>
        </p>
      </div>
    </div>
  );
};

export default Contact;
