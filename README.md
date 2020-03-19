# TFG - Excape Room SCORM

## Installation
1. Previous requirements:
    * A computer with internet connection.
    * Operative cmd/Konsole.
2. Install [node.js](https://nodejs.org/es/download/) and [git](https://git-scm.com/downloads).
3. Open a new terminal, go to your working directory and clone this GitHub poject:
    ```bash
    git clone https://github.com/adelabat/TFG
    ```
4. Go to the 'TFG' folder that has been created.
5. Execute the following command to install all the project dependencies in the 'node_modules' folder:
    ```bash
    npm install
    ```
6. Execute the following command to start the development server:
    ```bash
    npm start
    ```
   The app will be available at the following URL [http://localhost:8080](http://localhost:8080).  
   SCORM 1.2 environment will be available at [http://localhost:8080/scorm12.html](http://localhost:8080/scorm12.html).  
   SCORM 2004 environment will be available at [http://localhost:8080/scorm2004.html](http://localhost:8080/scorm2004.html).
    
7. Development server can be stopped by pressing 'Ctrl-C'.
8. Configuration can be specified in:  
    * app/config/config.js: Global configuration for the React application.  
    * app/config/config_lms.js: Configuration for the SCORM environments.      

## Available commands

- 'npm start' - Start the development server.
- 'npm run production' - Create a production ready build of the application in the 'dist' folder.
- 'npm run scorm_package' - Create a production ready build of the application and package it into two SCORM packages (compliant with SCORM 1.2 and SCORM 2004) in the 'dist_scorm' folder.
- 'npm run clean' - Remove the 'dist' and 'dist_scorm' folders.
- 'npm run lint' - execute an eslint check.
- 'npm test' - run all tests.

## Available Configuration
#### * title,
The name of your app .
#### * showUsername,
Allows showing or not the username .
#### * timeout,
Allows setting a time limit.
####  * mode,
Allows choosing one of the five different game modes.
* Symbol/Alphanumeric
* CombinationLock/PadLock
* Pattern
#### * theme,
Allows choosing one of the different [bootwatch themes](https://bootswatch.com/).
#### * tip,
A small text giving some useful information.
#### * escapp,
Allows using [escapp](https://escapp.dit.upm.es/) for monitoring puzzle´s answer, time and puntuation.
#### * puzzleId,
#### * escapeRoomId,
#### * puzzleLength,
Configuration of escapp parameters.
#### * answer,
If you´re not using [escapp](https://escapp.dit.upm.es/), this allows setting puzzles´s answer.
#### * Success Message,
A small text in case the correct answer was given.
#### * Fail Message,
A small text in case the wrong answer was given.
#### * ScormVersion,
* "1.2"
* "2004"
      
## * Features
- [x] SCORM 1.2 and SCORM 2004 4th Editon support
- [x] ECMAScript 6 and JSX support
- [x] React 16.0.0
- [x] React Router v4
- [x] Redux
- [x] Webpack (v.3.6.0) and Webpack Dev Server (v.2.8.2)
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] ES6 linting with continuous linting on file change
- [x] Separate CSS stylesheets generation
- [x] SASS support
- [x] Export Separate Vendor Files      

## * Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
