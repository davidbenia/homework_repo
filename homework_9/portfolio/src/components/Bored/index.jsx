import React, { useState, useEffect } from "react";
import useBoredFetch from "../../api/useBoredFetch";

const Bored = () => {
  const [idea, setIdea] = useState();
  const bored = useBoredFetch();

  const getActivity = (param) => {
    bored.method(param);
  };

  useEffect(() => {
    if (bored.loading == false) {
      if (bored.result != null) setIdea(bored.result.activity);
    } else setIdea("Let me think...");
  }, [bored]);

  return (
    <div className="content bg-slate-400 rounded-lg h-3/4 w-4/5">
      <h1 className="text-white text-4xl mx-48 text-center mt-5 bg-slate-500 p-10 rounded-full">
        Are you bored? Choose a topic and I'll give you ideas
      </h1>
      <div className="bg-slate-500 text-white mx-5 mt-10 p-10 text-xl h-2/3 rounded">
        <nav className="flex gap-x-2 justify-center">
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("education")}
          >
            Educational
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("recreational")}
          >
            Recreational
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("social")}
          >
            Social
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("diy")}
          >
            Do It Yourself
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("charity")}
          >
            Charity
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("cooking")}
          >
            Cooking
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("relaxation")}
          >
            Relaxation
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("music")}
          >
            Music
          </button>
          <button
            className="bg-slate-700 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("busywork")}
          >
            Busy Work
          </button>
          <button
            className="bg-green-500 py-2 px-3 rounded hover:bg-slate-400"
            onClick={() => getActivity("bruh")}
          >
            Test API downtime
          </button>
        </nav>
        <div className="flex justify-center mt-32 p-5 bg-slate-800">{idea}</div>
      </div>
    </div>
  );
};

export default Bored;
