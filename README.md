# youtube-clone

This is a react-app that uses MERN stack.This Clone was developed as a part of my Internship at "NULLCLASS PVT LIMITED" 

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository to your local machine:

In Git Bash or Vscode or terminal<br>
git clone git@github.com:MohammedSaffan2003/youtube-clone.git
cd youtube-clone

2. Install project dependencies:

    npm install
    # or
    yarn install

3. Environment Variables<br>
Create a .env file in the backend-server directory directory.<br>
Open the .env file and add the following environment variables:

PORT = 5500  
CONNECTION_URL = "mongodb+srv://<Email given to mongodb>:<password>@cluster0.cqrnu5i.mongodb.net/?retryWrites=true&w=majority"<br>
JWT_SECRET = "yutubeclone"

4. Running the Application<br>
cd client -> npm start (This creates the react-app)<br>
cd server-> npm start (This creates the backend server)

In backend if there are node_modules to be installed install them using<br> 
npm install <module_name> <br>
or <br>
npm install <module_name> -f<br>

The YoutubeClone will be available at http://localhost:3000

## OR

The whole website is already deployed in netlify with the backend server deployed in render website 

Here's the link to the deployed Youtube clone on netlify 

[YouTubeMSJ](https://youtubemsj.netlify.app/)  [ https://youtubemsj.netlify.app/ ]

