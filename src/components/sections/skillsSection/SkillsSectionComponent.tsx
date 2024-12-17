import React from "react"
import { ALL_SKILLS } from "@models/skill"
import "./SkillsSection.scss"

const SkillsSectionComponent: React.FC = () => {
  return (
    <div className="skillsSection">
      <div className="skillsList">
        {/* todo - jma - only display a subset of all skills */}
        {ALL_SKILLS.map(skill =>
          <div
            key={skill.name}
            className="skill">
            <div className="skillLogo"></div>
            <div className="skillName">
              {skill.name}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillsSectionComponent
