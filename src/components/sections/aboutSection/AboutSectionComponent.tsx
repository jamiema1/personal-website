import React from "react"
import { AboutDescription, AboutGreeting } from "@messages/messages"
import "./AboutSection.scss"

const AboutSectionComponent: React.FC = () => {
  return (
    <div className="aboutSection">
      <div>
        <img
          className="image"
          src="https://avatars.githubusercontent.com/u/97584835?v=4"></img>
        <div className="links">
          <div className="link">
            {/* Github Logo */}
          </div>
          <div className="link">
            {/* LinkedIn Logo */}
          </div>
          <div className="link">
            {/* Resume Logo */}
          </div>

        </div>
      </div>
      <div>
        <div>{AboutGreeting}</div>
        <span>{AboutDescription}</span>
      </div>
    </div>
  )
}

export default AboutSectionComponent
