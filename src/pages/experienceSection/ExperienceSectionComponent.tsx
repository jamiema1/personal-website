/* eslint-disable max-len */
import React from "react"
import { ALL_EXPERIENCES } from "@models/experience"
import "./ExperienceSection.scss"
import ExperienceComponent from "./experience/ExperienceComponent"

const ExperienceSectionComponent: React.FC = () => {
  return (
    <div className="experienceSection">
      <div className="experienceList">
        {ALL_EXPERIENCES.map(experience =>
          <ExperienceComponent
            key={experience.companyName}
            experience={experience}
          />
        )}
      </div>
    </div>
  )
}

export default ExperienceSectionComponent
