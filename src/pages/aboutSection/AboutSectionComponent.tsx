import React from "react"
import {AboutDescription, AboutGreeting, AboutSectionDisplayName} from "../pagesMessages"


const AboutSectionComponent: React.FC = () => {
  return (
    <div>
      <h1>{AboutSectionDisplayName}</h1>
      <div>{AboutGreeting}</div>
      <span>{AboutDescription}</span>
    </div>
  )
}

export default AboutSectionComponent
