import { Skill, Skills } from "./skill"

interface Project {
  name: string,
  description: string,
  skills: Skill[]
}

export const ALL_PROJECTS: Project[] = [
  {
    name: "Boulder Tracker",
    description: "",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.sql,
      Skills.aws,
      Skills.node,
    ]
  },
  {
    name: "Notifire",
    description: "",
    skills: [
      Skills.reactNative,
      Skills.expo,
      Skills.javascript,
    ]
  },
  {
    name: "Minute Mood",
    description: "",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
    ]
  },
  {
    name: "2048",
    description: "",
    skills: [
      Skills.python,
    ]
  },
  {
    name: "Minesweeper",
    description: "",
    skills: [
      Skills.java,
      Skills.jUnit,
    ]
  },
  {
    name: "Baseball Simulator",
    description: "",
    skills: [
      Skills.cPlusPlus,
    ]
  },
  {
    name: "Predicting Heart Disease",
    description: "",
    skills: [
      Skills.r,
    ]
  },
]