/* eslint-disable max-len */
import { Skill, Skills } from "./skill"

interface Project {
  name: string,
  description: string,
  githubLink: string,
  skills: Skill[]
}

export const ALL_PROJECTS: Project[] = [
  {
    name: "Boulder Tracker",
    description: `
    <ul>
      <li>Built a full-stack web application that allows users to track their progress when bouldering</li>
      <li>Developed a responsive React frontend with create, read, update, and delete functionality</li>
      <li>Created a REST API backend using Express and Node connected to a MySQL database hosted on AWS</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/boulder-tracker-v2",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.mysql,
      Skills.aws,
      Skills.node,
    ]
  },
  {
    name: "Notifire",
    description: `
    <ul>
      <li>Produced a mobile application to raise awareness and alert users of nearby forest fire hazards</li>
      <li>Designed and implemented during a 24-hour hackathon (nwHacks 2024)</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/Notifire",
    skills: [
      Skills.reactNative,
      Skills.expo,
      Skills.javascript,
    ]
  },
  {
    name: "Mining, Eh?",
    description: `
    <ul>
      <li>Implemented an interactive D3.js visualization to help users explore Canada’s rich mining history</li>
      <li>Standardized raw data to surface new metrics that enabled deeper insights and consistent analysis</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/Mining-Eh",
    skills: [
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.d3,
    ]
  },
  {
    name: "Minute Mood",
    description: `
    <ul>
      <li>Produced a full-stack web application to enhance mindfulness using a 5-minute journal</li>
      <li>Designed and implemented during a 12-hour hackathon (HackCamp 2023)</li>
    </ul>
    `,
    githubLink: "http://github.com/jamiema1/Minute-Mood",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
    ]
  },
  {
    name: "2048",
    description: `
    <ul>
      <li>Constructed a GUI with Pygame replicating the original game</li>
      <li>Followed the test-driven development process using the unittest testing framework</li>
    </ul>
    `,
    githubLink: "http://github.com/jamiema1/2048",
    skills: [
      Skills.python,
    ]
  },
  {
    name: "Minesweeper",
    description: `
    <ul>
      <li>Designed an interactive GUI using Java Swing and JFrame</li>
      <li>Utilized test-driven development using the JUnit 5 testing framework</li>
      <li>Implemented data persistence through JSON files</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/Minesweeper",
    skills: [
      Skills.java,
      Skills.jUnit,
    ]
  },
  {
    name: "Baseball Simulator",
    description: `
    <ul>
      <li>Developed a comprehensive CUI to model outcomes based on recent historical data</li>
      <li>Refactored existing code to follow OOP idioms to improve code structure and readability</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/Baseball-Simulator",
    skills: [
      Skills.cPlusPlus,
    ]
  },
  {
    name: "Predicting Heart Disease",
    description: `
    <ul>
      <li>Generated plots and graphs to justify design decisions and display findings</li>
      <li>Parsed raw data into a readable format for data manipulation</li>
      <li>Optimized accuracy by fine tuning parameters of the KNN classification algorithm</li>
    </ul>
    `,
    githubLink: "https://github.com/jamiema1/Predicting-Heart-Disease-with-KNN-Algorithm",
    skills: [
      Skills.r,
    ]
  },
]