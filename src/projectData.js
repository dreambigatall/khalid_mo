//import frontendFusion from "./assets/projectCover/frontend-fusion.png";
//import cheffest from "./assets/projectCover/cheffest.png";
import towerBuddy from "./assets/projectCover/towerbuddy.png";
import i4sight from "./assets/projectCover/i4sight.png";
import worldFusion from "./assets/projectCover/world_fusion.png";
import ethioFastFood from "./assets/projectCover/ethio_fast_food.png";
import ticTacToe from "./assets/projectCover/tictactoe.png";
export const projects = [
  {
    name: "EthioFastFood",
    image: ethioFastFood,
    projectLink: "https://dreambigatall.github.io/EthioFastFood/",
    githubLink: "https://github.com/dreambigatall/EthioFastFood",
    description:
      "EthioFastFood is a food ordering app where users can order for food. The remote state of the application is managed with context api and the form validation using react hook form. The backend is powered by mirage js.",
    skills: [
      "html",
      "css",
      "javaScript",
      "react",
      "react hook form",
      "tailwind css",
      "react router",
      "mirage js",
  
    ],
  },
  {
    name: "World Fusion",
    image: worldFusion,
    projectLink: "https://dreambigatall.github.io/World_Fusion/",
    githubLink: "https://github.com/dreambigatall/World_Fusion",
    description:
      "World Fusion is a frontend application that functions essentially as a  geography quiz and map also AI integration with gemini api, allowing users to play with map and Ai to know more about the country they selected and it include geography quiz game. Redux is utilised to manage the application state.",
    skills: ["html", "javaScript", "react", "redux", "gemini api","tailwind css", "react router", "react leaflet"],
  },
  {
    name: 'tower buddy',
    image: towerBuddy,
    projectLink: 'https://towerbuddy.tel/',
    githubLink: '',
    description:
      'TowerBuddy provides the landowners a platform to list the available property, increasing the chances of the property being monetized at optimum rate.',
    skills: ['html', 'css', 'javaScript', 'react', 'email JS'],
  },
  {
    name: 'Tic Tac Toe',
    image: ticTacToe,
    projectLink: 'https://dreambigatall.github.io/',
    githubLink: 'https://github.com/dreambigatall/dreambigatall.github.io',
    description:
      'Designed and developed my first interactive real-world project from scratch during my learning phase of js, html,css. My first web based game project.',
    skills: ['html', 'css', 'javaScript'],
  },
];
