import React from "react";

import python from "../../public/python.png";
import node from "../../public/node.png";
import flutter from "../../public/fluttor.svg";
import react from "../../public/react.png";
import reactnative from "../../public/native.svg";
import wordpress from "../../public/wordpress.png";
import django from "../../public/django.png";
import flask from "../../public/flask.png";
import swift from "../../public/swift.svg";
import kotlin from "../../public/kotlin.png";

const technologies = [
  { name: "Python", imgSrc: python, alt: "Python" },
  { name: "Node.js", imgSrc: node, alt: "Node.js" },
  { name: "Flutter", imgSrc: flutter, alt: "Flutter" },
  { name: "React.js", imgSrc: react, alt: "React.js" },
  { name: "React Native", imgSrc: reactnative, alt: "React Native" },
  { name: "Swift", imgSrc: swift, alt: "Swift" },
  { name: "Kotlin", imgSrc: kotlin, alt: "Kotlin" },
  { name: "Django", imgSrc: django, alt: "Django" },
  { name: "Flask", imgSrc: flask, alt: "Flask" },
  { name: "Wordpress", imgSrc: wordpress, alt: "Wordpress" },
];

const TechnologyGrid = () => {
  return (
    <section className="max-w-[1140px] bg-white text-center m-auto py-[120px] sm:py-[60px] px-5">
      <h1 className="text-[40px] sm:text-[32px] text-heading font-bold mb-[12px]">
        Technologies we work with
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center mt-24 px-5 sm:px-20 gap-y-8">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="shadow-md flex flex-col px-[30px] py-[20px] rounded-[14px] bg-grey items-center justify-center"
          >
            <img
              src={tech.imgSrc}
              className="w-[70px] h-[70px]"
              alt={tech.alt}
            />
            <p>{tech.name}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologyGrid;
