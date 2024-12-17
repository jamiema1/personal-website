import { Skill } from "./skill"

export interface Experience {
  position: string,
  companyName: string,
  description: string,
  startDate: Date,
  endDate?: Date, // undefined means a current employment
  skills: Skill[]
}

export const ALL_EXPERIENCES: Experience[] = [
  {
    position: "Software Developer Co-op",
    companyName: "Visier",
    description: "",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 11),
    skills: []
  },
  {
    position: "Global Talent Technology Co-op",
    companyName: "Teck Resources",
    description: "",
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 11),
    skills: []
  },
  {
    position: "Undergraduate Teaching Assistant",
    companyName: "University of British Columbia",
    description: "",
    startDate: new Date(2022, 0),
    endDate: new Date(2023, 3),
    skills: []
  },
]