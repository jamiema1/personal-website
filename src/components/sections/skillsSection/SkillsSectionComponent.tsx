import React from "react"
import { ALL_SKILLS } from "@models/skill"
import "devicon/devicon.min.css" // Import Devicon CSS
import "./SkillsSection.scss"
import SkillComponent from "./SkillComponent"

const SkillsSectionComponent: React.FC = () => {

  return (
    <div className="skillsSection">
      <div className="skillsList">
        {/* todo - jma - only display a subset of all skills */}
        {ALL_SKILLS.map(skill =>
          <SkillComponent key={skill.name} skill={skill} />
        )}
      </div>
    </div>
  )
}

export default SkillsSectionComponent
