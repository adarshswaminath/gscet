import React from "react";
import Aniamtion from "../assets/animation.json";
import Lottie from "lottie-react";
function Hero() {
  return (
    <div>
      <section>
        <div className="grid min-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              College Coding Kickstart Hackathon
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              We, the Computer Science Department, propose to organize a College
              Coding Kickstart Hackathon aimed at fostering an interest in
              coding among first, second, third, and final-year students. The
              primary objective is to provide them with an initial push towards
              self-learning and the development of coding skills.
            </p>
            <button className="btn rounded-full">Duration: 8 hours</button>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <Lottie animationData={Aniamtion} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
