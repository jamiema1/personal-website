/* eslint-disable max-len */
import React, { useState } from "react"

import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SkillPillListComponent from "@components/skillPillList/SkillPillListComponent"

import { ExperiencePresentDisplayMessage } from "@messages/messages"

import { Experience } from "@models/experience"

import "./Experience.scss"

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
    <div className={`experience ${open ? "expand" : "collapse"}`}>
      <div className="experinceHeader" onClick={() => handleClick()}>
        <div>
          {formatExperienceDisplayName(experience)}
        </div>
        <div className="dropdownIcon">
          <FontAwesomeIcon
            icon={open ? faCircleChevronUp : faCircleChevronDown}
            size="2x"
          />
        </div>
      </div>
      <div className={`experienceBody ${open ? "expand" : "collapse"}`}>
        <div className="experienceDate">
          {formatTimeDisplayName(experience)}
        </div>
        <div
          className="experienceDescription"
          dangerouslySetInnerHTML={{ __html: experience.description }}>
        </div>
        <SkillPillListComponent skills={experience.skills} />
      </div>
    </div>
  )
}

export default ExperienceComponent
