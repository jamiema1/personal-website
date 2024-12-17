import React from "react"
import { ALL_SKILLS } from "../../models/skill"
import "./SkillsSection.scss"

const SkillsSectionComponent: React.FC = () => {
  return (
    <div className="skillsSection">
      <div className="skillsList">
        {ALL_SKILLS.map(skill =>
          <div
            key={skill.name}
            className="skill">
            {skill.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillsSectionComponent
