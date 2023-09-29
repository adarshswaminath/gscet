import React from "react";

function Challenges() {
  return (
    <div className="p-2" id="challenges">
      <h3 className="text-center font-bold text-xl">Challenges</h3>
     <div className="grid lg:flex justify-center lg:gap-6 items-center ">
     <ul className="steps steps-vertical">
        <li className="step">Personal Portfolio Website</li>
        <li className="step">Interactive Quiz App</li>
        <li className="step">To-Do List Web App</li>
        <li className="step">Weather App</li>
        <li className="step">Image Gallery</li>
      </ul>

      <ul className="steps steps-vertical">
      <li className="step">Basic Calculator</li>
        <li className="step">Blog Post Page</li>
        <li className="step">Countdown Timer</li>
        <li className="step">Login/Registration Form</li>
        <li className="step">Interactive Navbar</li>
      </ul>
     </div>
    </div>
  );
}

export default Challenges;
