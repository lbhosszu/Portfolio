import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A driven individual who is motivated to code and extremely good at problem-solving 
          as demonstrated through personal and college projects. As a result, competent and able 
          to work well under pressure. Also, an intellectually creative person with experience 
          using Adobe programs that enables me to create unique and visually appealing solutions.
        </p>

        <br />

        <p className="text-xl">
          Third year Computer Science student, seeking a six-month internship as a Software Engineer/
           Web Developer for the year 2024. I am looking for a challenging environment to use my skills 
           and gain significant training in programming in the professional workplace.
        </p>
      </div>
    </div>
  );
};

export default About;