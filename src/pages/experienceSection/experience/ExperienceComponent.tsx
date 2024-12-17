/* eslint-disable max-len */
import React, { useState } from "react"
import { Experience } from "@models/experience"
import "./Experience.scss"
import { ExperiencePresentDisplayMessage } from "pages/sectionsMessages"

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

  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <div
      key={props.experience.companyName}
      className="experience">
      <div className="collapsedExperienceContainer">
        <div>
          {formatExperienceDisplayName(props.experience)}
        </div>
        <div
          className="dropdownIcon"
          onClick={() => handleClick()}
          // todo: jma - add dropdown icon
        ></div>
      </div>
      {state &&
       <div>
         <div>
           {formatTimeDisplayName(props.experience)}
         </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.
       </div>
      }
    </div>
  )
}

export default ExperienceComponent
