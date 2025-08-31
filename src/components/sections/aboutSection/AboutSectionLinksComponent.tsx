import React from "react"

import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./AboutSectionLinks.scss"
import { email, github, linkedIn, resume } from "@messages/links"

const AboutSectionLinksComponent: React.FC = () => {
  const size = "2x"

  return (
    <div className="links">
      <a 
        className="link"
        href={resume}
        download={resume}
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          size={size}
        />
      </a>
      <a 
        className="link"
        target="_blank"
        href={github}
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
        href={linkedIn}
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size={size}
        />
      </a>
      <a
        className="link"
        href={`mailto:${email}`}
      >
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          size={size}
        />
      </a>
    </div>
  )
}

export default AboutSectionLinksComponent
