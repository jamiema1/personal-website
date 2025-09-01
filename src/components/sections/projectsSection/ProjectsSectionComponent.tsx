import React, { useEffect, useState } from "react"

import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SkillPillListComponent from "@components/skillPillList/SkillPillListComponent"

import { ALL_PROJECTS } from "@models/project"

import "./ProjectsSection.scss"

const ProjectsSectionComponent: React.FC = () => {

  const totalItems: number = ALL_PROJECTS.length
  const [index, setIndex] = useState(0)

  useEffect(() => {
    updateCarousel()
  }, [index])

  function updateCarousel() {
    const track: HTMLDivElement | null = document.querySelector(".projectsList")
    if (track) {
      const itemWidth = track.clientWidth / totalItems
      const translateXValue = -itemWidth * index
      track.style.transform = `translateX(${translateXValue}px)`
      track.style.width = `${totalItems * 100}%`
    }
  }
  
  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function handleNext() {
    if (index < totalItems - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div className="projectsSection">
      <div className="projectButtons">
        <div
          className="projectButton"
          onClick={() => handlePrev()}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            size="2x"
          />
        </div>
        <div
          className="projectButton"
          onClick={() => handleNext()}
        >
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            size="2x"
          />
        </div>
      </div>
      <div className="projectCarousel">
        <div className="projectsList">
          {ALL_PROJECTS.map(project =>
            <div
              key={project.name}
              className="project">
              <div className="projectText">
                <div>
                  <div className="projectName">
                    {project.name}
                  </div>
                  <div
                    className="projectDescription"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></div>
                </div>
                <div>
                  <a 
                    className="link"
                    target="_blank"
                    href={project.githubLink}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      size="2x"
                    />
                  </a>
                </div>
                <SkillPillListComponent skills={project.skills} />
              </div>
              <div>
                <div className="projectImage"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSectionComponent
