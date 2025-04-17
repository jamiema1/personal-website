import React from "react"

import ExperienceComponent from "@components/sections/experienceSection/experience/ExperienceComponent"

import { ALL_EXPERIENCES } from "@models/experience"

import "./ExperienceSection.scss"

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
