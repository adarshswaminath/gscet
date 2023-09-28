import React from "react";
import image1 from "../assets/101.jpg"
import image2 from "../assets/102.jpg"
import image3 from "../assets/103.jpg"



const Card = ({image,title,caption}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{caption}</p>
      </div>
    </div>
  );
};

function Goals() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold text-center">
        Goals and Objectives
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
        <Card 
            image={image1} 
            title="Promote Coding Skills"
            caption="Introduce and encourage students to explore coding, emphasizing its importance in today's technology-driven world."
            />
        <Card 
            image={image2}
            title="Inspire Self-Learning"
            caption="Motivate students to take initiative in learning coding languages and technologies."
        />
        <Card 
            image={image3}
            title="Foster Teamwork"
            caption="Encourage collaboration and problem-solving skills through teamwork among students"
        />
      </div>
    </div>
  );
}

export default Goals;
