import React from "react"
import { ALL_EXPERIENCES } from "../../models/experience"
import "./ExperienceSection.scss"

const ExperienceSectionComponent: React.FC = () => {
  return (
    <div className="experienceSection">
      <div className="experienceList">
        {ALL_EXPERIENCES.map(experience =>
          <div
            key={experience.companyName}
            className="experience">
            {experience.companyName}: {experience.position}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceSectionComponent
