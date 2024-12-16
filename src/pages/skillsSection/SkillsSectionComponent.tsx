import React from "react"
import "./SkillsSection.scss"

interface Skill {
  name: string
}

const skills: Skill[] = [
  {name: "Javascript"},
  {name: "Typescript"},
  {name: "CSS"},
  {name: "Scala"},
  {name: "Python"},
  {name: "React"},
  {name: "Angular"},
  {name: "LESS"},
  {name: "SQL"},
  {name: "Java"},
  {name: "C++"},
]

const SkillsSectionComponent: React.FC = () => {
  return (
    <div className="skillsSection">
      <div className="skillsList">
        {skills.map(skill =>
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
