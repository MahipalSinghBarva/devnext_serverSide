DevNext Application

Overview
DevNext is a full-stack web application designed to [brief description of the application's purpose]. This project is divided into two parts: the client-side application and the server-side application.

The Client-Side is built using modern web technologies to ensure a responsive and dynamic user experience.
The Server-Side handles the application's business logic, data processing, and API management.
Technologies Used
Client-Side
React.js - A JavaScript library for building user interfaces.
Tailwind CSS - A utility-first CSS framework for rapid UI development.
Axios - A promise-based HTTP client for the browser and Node.js.
Server-Side
Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js - A minimal and flexible Node.js web application framework.
MongoDB - A NoSQL database for storing application data.
Mongoose - An ODM (Object Data Modeling) library for MongoDB and Node.js.
Axios - Used for making HTTP requests to external APIs.
Features
User Authentication: Secure user login and registration (if applicable).
Quiz Functionality: Fetches and displays quizzes from an external API.
User Score Tracking: Saves and displays user quiz results.
Responsive Design: Fully responsive UI for various device sizes.
Installation
Prerequisites
Node.js (v14 or later)
MongoDB (local instance or cloud service)
Git

API Endpoints
GET /api/quiz
Description: Fetches quiz questions from the Open Trivia DB API.
Response: JSON array of quiz questions.
POST /api/saveScore
Description: Saves the user's score and feedback.

Deployment
Client-Side
The client-side application is deployed on Netlify:

Live URL: https://devnext-clientsideapp.netlify.app/
Server-Side
The server-side application is deployed on Render:

Live URL: https://devnext-serverside.onrender.com
Links
Client-Side Repository: https://github.com/MahipalSinghBarva/devnext_clientSide
Server-Side Repository: https://github.com/MahipalSinghBarva/devnext_serverSide
