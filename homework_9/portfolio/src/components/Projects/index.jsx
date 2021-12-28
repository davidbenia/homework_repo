import React from "react";

const Projects = () => {
  return (
    <div className="content bg-slate-400 rounded-lg h-3/4 w-4/5">
      <h1 className="text-white text-4xl mx-48 text-center mt-5 bg-slate-500 p-10 rounded-full">
        My Projects
      </h1>
      <div className="bg-slate-500 text-white mx-5 mt-10 p-10 text-xl rounded">
        <div className="grid justify-center gap-y-2">
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://github.com/davidbenia/Mobile_App"
          >
            Tesla WebApp Mock (React Native)
          </a>
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://github.com/davidbenia/Musify"
          >
            Shazam Knockoff (React Native)
          </a>
          <a
            className="bg-slate-600 p-2 hover:bg-slate-400"
            href="https://github.com/davidbenia/WeatherApp"
          >
            Weather App (WIP) (React Native)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
