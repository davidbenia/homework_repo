import React from "react";

const About = () => {
  return (
    <div className="content bg-slate-400 rounded-lg flex-column h-3/4 w-4/5 justify-center items-center">
      <h1 className="text-white text-4xl mx-48 text-center mt-5 bg-slate-500 p-10 rounded-full">
        About Me
      </h1>
      <div className="bg-slate-500 text-white mx-5 mt-10 p-10 text-xl rounded">
        <div className="grid gap-y-4 bg-slate-600 p-2 rounded leading-8">
          <p>Hello, I'm David</p>
          <p>I'm a bachelor of Information Technology</p>
          <p>
            I study at Business and Technology university and am on my 7th
            semester
          </p>
          <p>
            I am interested in all sorts of IT spheres, such as software
            development, system/network administration, database management, web
            development
          </p>
          <p>I'm a noob at front-end :)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
