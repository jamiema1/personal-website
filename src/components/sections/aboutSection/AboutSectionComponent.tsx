import React from "react"

import { AboutDescription, AboutGreeting, AboutName } from "@messages/messages"

import AboutSectionLinksComponent from "./AboutSectionLinksComponent"

import "./AboutSection.scss"

const AboutSectionComponent: React.FC = () => {
  const profilePicture = "https://avatars.githubusercontent.com/u/97584835?v=4"

  return (
    <div className="aboutSection">
      <div>
        <img
          className="image"
          src={profilePicture}>
        </img>
        <AboutSectionLinksComponent />
      </div>
      <div>
        <div>{AboutGreeting}</div>
        <br></br>
        <div className="aboutName">{AboutName}</div>
        <br></br>
        <span>{AboutDescription}</span>
      </div>
    </div>
  )
}

export default AboutSectionComponent
