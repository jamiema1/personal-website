/* eslint-disable max-len */
import React, { useState } from "react"
import { Experience } from "@models/experience"
import "./Experience.scss"
import { ExperiencePresentDisplayMessage } from "pages/sectionsMessages"
import SkillPillListComponent from "pages/skillsSection/skillPillList/SkillPillListComponent"

function formatExperienceDisplayName(experience: Experience): string {
  return `${experience.position} @ ${experience.companyName}`
}

function formatTimeDisplayName(experience: Experience): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const formattedStartDate = experience.startDate.toLocaleString("en-US", options)
  const formattedEndDate = experience.endDate?.toLocaleString("en-US", options) ?? ExperiencePresentDisplayMessage
  return `${formattedStartDate} - ${formattedEndDate}`
}

interface ExperienceProps {
  experience: Experience
}

const ExperienceComponent: React.FC<ExperienceProps> = (props) => {

  const experience = props.experience

  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <div
      key={experience.companyName}
      className="experience">
      <div className="collapsedExperienceContainer">
        <div>
          {formatExperienceDisplayName(experience)}
        </div>
        <div
          className="dropdownIcon"
          onClick={() => handleClick()}
          // todo: jma - add dropdown icon
        ></div>
      </div>
      {state &&
       <div>
         <div className="experienceDate">
           {formatTimeDisplayName(experience)}
         </div>
         <div className="experienceDescription">
           {experience.description}
         </div>
         <SkillPillListComponent skills={experience.skills} />
       </div>
      }
    </div>
  )
}

export default ExperienceComponent
