import React from "react"
import { Skill } from "@models/skill"
import "./SkillPillList.scss"

interface SkillPillListProps {
  skills: Skill[]
}

const SkillPillListComponent: React.FC<SkillPillListProps> = (props) => {
  return (
    <div className="skillPillList">
      {props.skills.map(skill =>
        <div
          key={skill.name}
          className="skillPill">
          {skill.name}
        </div>
      )}
    </div>
  )
}

export default SkillPillListComponent
