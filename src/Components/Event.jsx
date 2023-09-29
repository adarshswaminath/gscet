import React from "react";

function Event() {
  return (
    <div className="bg-gray-100 py-12" id="event">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Event Format</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Preparation Phase */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Preparation Phase (Two Weeks Prior)</h3>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                Notify all students about the upcoming hackathon, its significance, and the technologies they should focus on (HTML, CSS, and JavaScript).
              </li>
              <li className="mb-2">
                Provide participants with beginner-friendly coding projects, tutorials, and online resources.
              </li>
              <li className="mb-2">
                Offer guidance through Google, ChatGPT, YouTube tutorials, and a dedicated core team to assist participants when they encounter challenges.
              </li>
            </ul>
          </div>

          {/* Hackathon Day */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Hackathon Day</h3>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                Participants will have 8 hours to complete their projects.
              </li>
              <li className="mb-2">
              Teams, consisting of a minimum of 2 and a maximum of 5 members, can collaborate to complete their projects. This team-based approach promotes collaboration and problem-solving skills.
              </li>
              <li className="mb-2">
                They can work individually or in teams.
              </li>
              <li className="mb-2">
                Regular check-ins with the core team to address doubts and provide support.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
