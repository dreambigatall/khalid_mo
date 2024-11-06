import frontendFusion from "./assets/projectCover/frontend-fusion.png";
import cheffest from "./assets/projectCover/cheffest.png";
import towerBuddy from "./assets/projectCover/towerbuddy.png";
import i4sight from "./assets/projectCover/i4sight.png";

export const projects = [
  {
    name: "EthioFastFood",
    image: cheffest,
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
    image: frontendFusion,
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
    name: 'i4Sight',
    image: i4sight,
    projectLink: 'https://www.i4sight.net/',
    githubLink: '',
    description:
      'Designed and developed my first static real-world project from scratch during my internship at the company. One of the first B2B2C platforms of its kind is i4Sight.',
    skills: ['html', 'css', 'javaScript'],
  },
];
