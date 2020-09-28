# Welcome to React Minesweeper

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and utilizes: 
1. [Redux](https://redux.js.org/) for state management.
2. [Jest](https://jestjs.io/) for function unit tests.
3. [Storybook](https://storybook.js.org/) for component unit tests.

![screenshot](./docs/screenshot.png)

## Getting Started:

This file currently does not live on GitHub, so you've likely received this in a zip file shared privately! 

Extract the .zip folder to a directory of your choosing, and in terminal or powershell enabled with NPM, navigate to that directory. 

From the root directory, run  
```
npm install
```

From the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the jest test runner in the interactive watch mode.

#### `npm storybook`

Launches the storybook component test environment at [http://localhost:6006](http://localhost:6006) <br /> 
Here you can see component renderings. 

## Future Features:

Currently this minesweeper version only has one difficulty setting. The game generation is agnostic to the size of the board generated, and a small refactor would allow dynamic board size.

Testing focused on redux is missing, and implementing some store tests would aid the project as a whole.

