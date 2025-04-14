import React, { useEffect, useState } from "react"
import { ALL_PROJECTS } from "@models/project"
import SkillPillListComponent from "@components/skillPillList/SkillPillListComponent"
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
        ></div>
        <div
          className="projectButton"
          onClick={() => handleNext()}
        ></div>
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
                  <div className="projectDescription">
                    {project.description}
                  </div>
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
