import { ExperienceDetails, ProjectDetails, Technology } from "./types";
import Javascript from "../public/icon-javascript.svg";
import ReactJs from "../public/icon-react.svg";
import NodeJs from "../public/icon-nodejs.svg";
import Typescript from "../public/icon-typescript.svg";
import MongoDB from "../public/icon-mongodb.svg";
import Tailwind from "../public/icon-tailwindcss.svg";
import ExpressLightMode from "../public/icon-express-light.svg";
import ExpressDarkMode from "../public/icon-express.svg";
import NextJs from "../public/icon-nextjs.svg";
import Git from "../public/icon-git.svg";
import SocketIODarkMode from "../public/icon-socket.svg";
import SocketIOLightMode from "../public/icon-socket-light.svg";
import GamixLogo from "../public/gamixLogo.png";
import GreatDevLogo from "../public/great_developers_logo.jpg";
import image from "../public/full_me_2.jpg";
import image2 from "../public/full_me.jpg";

export const TECHNOLOGIES: Technology[] = [
  {
    name: "Javascript",
    logo: Javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "ReactJs",
    logo: ReactJs,
    url: "https://reactjs.org/",
  },
  {
    name: "ReactNative",
    logo: ReactJs,
    url: "https://reactnative.dev/",
  },
  {
    name: "NodeJs",
    logo: NodeJs,
    url: "https://nodejs.org/en/",
  },
  {
    name: "Typescript",
    logo: Typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "MongoDB",
    logo: MongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Tailwind",
    logo: Tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Express",
    logo: ExpressDarkMode,
    darkModeLogo: ExpressLightMode,
    url: "https://expressjs.com/",
  },
  {
    name: "NextJs",
    logo: NextJs,
    url: "https://nextjs.org/",
  },
  {
    name: "Git",
    logo: Git,
    url: "https://git-scm.com",
  },
  {
    name: "SocketIO",
    logo: SocketIODarkMode,
    darkModeLogo: SocketIOLightMode,
    url: "https://socket.io/",
  },
];

export const PROJECTSDETAILS: ProjectDetails[] = [
  {
    name: "Portfolio",
    description: "A portfolio website to showcase my projects and skills.",
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
      TECHNOLOGIES[3].name,
      TECHNOLOGIES[6].name,
      TECHNOLOGIES[7].name,
      TECHNOLOGIES[8].name,
    ],
    githubUrl: "",
    previewImage: image,
    url: "",
  },
  {
    name: "Placement Portal",
    description:
      "A web application to manage the placement process of a college.",
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
      TECHNOLOGIES[3].name,
      TECHNOLOGIES[4].name,
      TECHNOLOGIES[6].name,
    ],
    githubUrl: "",
    previewImage: image2,
    url: "",
  },
  {
    name: "E-Commerce",
    description: "An e-commerce website to buy and sell products.",
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
      TECHNOLOGIES[3].name,
      TECHNOLOGIES[4].name,
      TECHNOLOGIES[6].name,
    ],
    githubUrl: "",
    previewImage: image,
    url: "",
  },
];

export const EXPERIENCEDETAILS: ExperienceDetails[] = [
  {
    company: "Gamix Labs Pvt Ltd",
    logo: GamixLogo,
    role: "Frontend Game Developer",
    startDate: "July 2024",
    currentlyWorkHere: true,
    duration: "8 months",
    summmary:
      "Working on interactive games using TypeScript, Cocos, Unity, ensuring engaging user experiences and high performance across platforms. Working with casino and slot games, ensuring engaging gameplay, high performance, and seamless user experience.",
    technologies: [TECHNOLOGIES[4].name, "COCOS CREATOR", "UNITY", "C#"],
    location: "Noida, India",
    url: "https://www.gamixlabs.com/",
  },
  {
    company: "Great Developers Info Tech",
    logo: GreatDevLogo,
    role: "Software Developer Intern",
    startDate: "March 2024",
    endDate: "June 2024",
    currentlyWorkHere: false,
    duration: "3 Months",
    summmary:
      "I used AJAX for fetching data asynchronously from the server. I used MVC architecture for developing the application using DOTNET and C#. I used SQL for database management.",
    technologies: [
      "HTML",
      "CSS | Bootstrap",
      "AJAX",
      "JAVASCRIPT",
      "C#",
      "DOTNET",
      "SQL",
    ],
    location: "Noida, India",
    url: "https://www.greatdevelopers.com/",
  },
];
