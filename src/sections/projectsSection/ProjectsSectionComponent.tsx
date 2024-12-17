import React from "react"
import { ALL_PROJECTS } from "@models/project"
import "./ProjectsSection.scss"
import SkillPillListComponent from "pages/skillsSection/skillPillList/SkillPillListComponent"

const ProjectsSectionComponent: React.FC = () => {
  return (
    <div className="projectsSection">
      <div className="projectsList">
        {ALL_PROJECTS.map(project =>
          <div
            key={project.name}
            className="project">
            {project.name}
            {project.description}
            <SkillPillListComponent skills={project.skills} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsSectionComponent
