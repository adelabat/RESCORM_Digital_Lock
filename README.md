# RESCORM Digital Lock
By: [@adelabat](http://github.com/adelabat)

This application allows you to customize a digital lock for digital escape rooms. It can be used along with the [escapp](https://escapp.dit.upm.es) platform for managing educational escape rooms.

## Installation
1. Install [node.js](https://nodejs.org/es/download/) and [git](https://git-scm.com/downloads).
2. Open a new terminal, go to your working directory and clone this GitHub poject:
    ```bash
    git clone https://github.com/adelabat/TFG
    cd TFG
    ```
3. Execute the following command to install all the project dependencies in the 'node_modules' folder:
    ```bash
    npm install
    ```
4. Execute the following command to start the development server:
    ```bash
    npm start
    ```
   The app will be available at the following URL [http://localhost:8080](http://localhost:8080).  
   The SCORM 1.2 environment will be available at [http://localhost:8080/scorm12.html](http://localhost:8080/scorm12.html).  
   The SCORM 2004 environment will be available at [http://localhost:8080/scorm2004.html](http://localhost:8080/scorm2004.html).
    
5. The development server can be stopped by pressing 'Ctrl-C'.
6. Configuration can be specified in:  
    * app/config/config.js: Global configuration for the React application.  
    * app/config/config_lms.js: Configuration for the SCORM environments.      

## Available commands

- `npm start` - Start the development server.
- `npm run production` - Create a production ready build of the application in the `dist` folder.
- `npm run scorm_package` - Create a production ready build of the application and package it into two SCORM packages (compliant with SCORM 1.2 and SCORM 2004) in the `dist_scorm` folder.
- `npm run clean` - Remove the `dist` and `dist_scorm` folders.
- `npm run lint` - Execute an eslint check.
- `npm test` - Run all tests.

## Available Configuration
 * **`title`**: The name of your app that will be shown on the title of the page.
 * **`showUsername`**: Whether the student name included in the SCORM profile should be displayed or not.
* **`timeout`**: The time limit to guess the code (in seconds)
* **`mode`**: The puzzle type. It can be one of the following:
  * **`Alphanumeric`**: Combination of letters and numbers
  * **`Symbol`**: Combination of symbols. You can choose your own symbols by providing your own images under the `assets`folder.
  * **`CombinationLock`**: Safe box-like digit combination. You can provide your own image by specifiyng the `CombinationLockImage` property.
  * **`Padlock`**: Padlock-like digit combination. You can choose whether it has a metallic effect or a flat color by specifying the `nonMetallic` property.
  * **`Pattern`**: Android-like pattern code. You can only choose numbers from 1 to 9.
* **`theme`**: Theme. It must be one of the themes available in [bootwatch](https://bootswatch.com/).
* **`tip`**: Instructions for the user. It can be a small tip on how to use the application or a subtle clue.
* **`escapp`**: Whether you are using [escapp](http://escapp.dit.upm.es) to manage your escape room. In this case, escapp will verify the puzzle solution and track the user's progress. In case you are using escapp you need to provide the following:
	* **`escapeRoomId`**: Escape room identifier
	* **`puzzleId`**: Puzzle identifier
   	* **`puzzleLength`**: Number of characters in the solution (number of digits/letters/symbols)
	* **`token`**: Escapp user e-mail
    
If your are not using escapp, you need to provide the following:
* **`answer`**: The right code. Depending on the puzzle type it can be a combination of letters and/or numbers.
* **`successMessage`**: Text to display when the user provides the right answer.
* **`failMessage`**: Text to display when the user provides the wrong answer or runs out of time.

Additionally, you can specify which SCORM version you will be using:
 * **`scormVersion`**: "1.2" or "2004"
      
