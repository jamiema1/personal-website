/* eslint-disable max-len */
import { Skill, Skills } from "./skill"

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
    description: `
      <ul>
        <li>Enhanced core features of the flagship platform, Visier People, as a full-stack developer (Angular & Scala)</li>
        <li>Elaborated and developed a high-impact feature showcased during a company-wide quarterly meeting</li>
        <li>Implemented AI-powered summarization features within the core application</li>
        <li>Validated and tested bug fixes during weekly review sessions to ensure regressions were not introduced</li>
      </ul>
    `,
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 11),
    skills: [
      Skills.angular,
      Skills.typescript,
      Skills.css,
      Skills.html,
      Skills.scala,
      Skills.less,
    ]
  },
  {
    position: "Global Talent Technology Co-op",
    companyName: "Teck Resources",
    description: `
      <ul>
        <li>Supported recruiters globally via the sustainment of 18 applications within the recruitment technology stack</li>
        <li>Saved numerous FTEs by producing and sustaining critical Python scripts that automate daily manual tasks</li>
        <li>Utilized 15+ Power Automate flows to document and resolve 600+ issues raised by clients</li>
        <li>Crafted Power BI dashboards to highlight KPIs used to justify application adoption, usage, and renewal</li>
        <li>Integrated four recruitment technologies into the enterprise HRIS system (SAP SuccessFactors)</li>
      </ul>
    `,
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 11),
    skills: [
      Skills.python,
      Skills.powerAutomate,
      Skills.powerBI,
    ]
  },
  {
    position: "Undergraduate Teaching Assistant - Computer Science",
    companyName: "University of British Columbia",
    description: `
      <ul>
        <li>Aided up to 30 students per class in the completion of weekly labs and other course related work</li>
        <li>Provided one-on-one assistance and guidance during weekly office hours</li>
        <li>Collaborated with course staff during weekly meetings to update and improve course material</li>
        <li>Accurately marked problem sets, assignments, and exams in a timely manner</li>
      </ul>
    `,
    startDate: new Date(2022, 0),
    endDate: new Date(2023, 3),
    skills: []
  },
]