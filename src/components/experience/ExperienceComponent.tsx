/* eslint-disable max-len */
import React, { useState } from "react"
import { Experience } from "@models/experience"
import { ExperiencePresentDisplayMessage } from "messages/messages"
import SkillPillListComponent from "@components/skillPillList/SkillPillListComponent"
import "./Experience.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons"

function formatExperienceDisplayName(experience: Experience): string {
  return `${experience.position} @ ${experience.companyName}`
}

function formatTimeDisplayName(experience: Experience): string {
  const options: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }
  const formattedStartDate = experience.startDate.toLocaleString("en-US", options)
  const formattedEndDate = experience.endDate?.toLocaleString("en-US", options) ?? ExperiencePresentDisplayMessage
  return `${formattedStartDate} - ${formattedEndDate}`
}

interface ExperienceProps {
  experience: Experience
}

const ExperienceComponent: React.FC<ExperienceProps> = (props) => {

  const experience = props.experience

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div
      key={experience.companyName}
      className="experience"
      onClick={() => handleClick()}
    >
      <div className="collapsedExperienceContainer">
        <div>
          {formatExperienceDisplayName(experience)}
        </div>
        {open ? 
          <div className="dropdownIcon">
            <FontAwesomeIcon
              icon={faCircleChevronUp}
              size="2x"
            />
          </div> :
          <div className="dropdownIcon">
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              size="2x"
            />
          </div>}
      </div>
      {open &&
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
