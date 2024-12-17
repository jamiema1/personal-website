import { Skill } from "./skill"

interface Experience {
  position: string,
  companyName: string,
  description: string,
  skills: Skill[]
}

export const ALL_EXPERIENCES: Experience[] = [
  {
    position: "Software Developer Co-op",
    companyName: "Visier",
    description: "",
    skills: []
  },
  {
    position: "Global Talent Technology Co-op",
    companyName: "Teck Resources",
    description: "",
    skills: []
  },
  {
    position: "Undergraduate Teaching Assistant",
    companyName: "University of British Columbia",
    description: "",
    skills: []
  },
]