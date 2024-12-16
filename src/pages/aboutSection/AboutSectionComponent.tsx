import React from "react"
import {AboutDescription, AboutGreeting} from "../pagesMessages"
import "./AboutSection.scss"

const AboutSectionComponent: React.FC = () => {
  return (
    <div className="aboutSection">
      <img
        className="image"
        src="https://avatars.githubusercontent.com/u/97584835?v=4"></img>
      <div>
        <div>{AboutGreeting}</div>
        <span>{AboutDescription}</span>
      </div>
    </div>
  )
}

export default AboutSectionComponent
