import React from "react"

import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { AboutDescription, AboutGreeting } from "@messages/messages"

import "./AboutSection.scss"

const AboutSectionComponent: React.FC = () => {
  const size = "2x"
  const githubLink = "https://github.com/jamiema1"
  const linkedInLink = "https://www.linkedin.com/in/jamiekma/"
  const profilePicture = "https://avatars.githubusercontent.com/u/97584835?v=4"

  return (
    <div className="aboutSection">
      <div>
        <img
          className="image"
          src={profilePicture}></img>
        <div className="links">
          <a 
            className="link"
            target="_blank"
            href={githubLink}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              size={size}
            />
          </a>
          <a 
            className="link"
            target="_blank"
            href={linkedInLink}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size={size}
            />
          </a>
          <a
            className="link"
            href="mailto:jkmm.1024@gmail.com"
          >
            <FontAwesomeIcon
              icon={faSquareEnvelope}
              size={size}
            />
          </a>
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
