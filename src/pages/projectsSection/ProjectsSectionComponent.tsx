import React from "react"
import { ALL_PROJECTS } from "@models/project"
import "./ProjectsSection.scss"

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
            <div className="projectSkillList">
              {project.skills.map(skill =>
                <div
                  key={skill.name}
                  className="projectSkill">
                  {skill.name}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsSectionComponent
