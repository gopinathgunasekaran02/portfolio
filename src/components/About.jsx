import React from "react";
import aboutImg from "../assets/aboutimg.jpg";

const About = () => {
  return (
    <div
      className="text-white max-w-[1200px] mx-auto my-12 font-sans"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              To be part of a progressive and innovative organization that
              provides an opportunity to apply my programming and analytical
              skills to the success of the organization and to build my career.
            </p>
          </div>
        </div>

        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={350}
          height={400}
          alt="aboutimg"
        />
      </div>
    </div>
  );
};

export default About;
