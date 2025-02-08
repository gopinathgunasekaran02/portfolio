import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import docker from "../assets/docker.webp";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import git from "../assets/git1.png";
import mongo from "../assets/mongo.webp";
import postgresql from "../assets/postgresql.png";
import postman from "../assets/postmon.png";
import swagger from "../assets/swagger.png";
import typeorm from "../assets/typeorm.png";
import nest from "../assets/nest.png";
import typeo from "../assets/type.png";

const skills = [
  { name: "JavaScript", image: javascript },
  { name: "NodeJs", image: node },
  { name: "Nest", image: nest},
  { name: "Docker", image: docker },
  { name: "PostgreSQL", image: postgresql },
  { name: "Swagger", image: swagger },
  { name: "React", image: react },
  { name: "MongoDB", image: mongo },
  { name: "TypeORM", image: typeo },
  { name: "Git", image: git },
  { name: "HTML", image: html },
  { name: "CSS", image: css }
];

const Skills = () => {
  return (
    <div className="bg-black font-sans text-gray-400 py-10 px-5">
      <h2 className="text-gray-700 text-3xl md:text-4xl font-bold text-center mb-10">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 sm:w-20 md:w-24 lg:w-28 max-w-full"
            />
            <p className="mt-2 text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
