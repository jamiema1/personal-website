import React, { useRef } from "react"
import { Skill } from "@models/skill"
import "devicon/devicon.min.css"

interface SkillComponentProps {
  skill: Skill
}

const SkillComponent: React.FC<SkillComponentProps> = (props) => {

  const logoRef = useRef<HTMLDivElement | null>(null)
  // const [isHovered, setIsHovered] = useState(false)

  function handleMouseEnter() {
    logoRef.current?.classList.add("colored")
  }

  function handleMouseLeave() {
    logoRef.current?.classList.remove("colored")
  }

  return (
    <div
      className="skill"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skillLogo">
        {/* <i
          className={`${props.skill.icon} ${isHovered ? "hide" : ""}`}
          style={{ transition: "opacity 0.5s ease" }}
        ></i>
        <i
          className={`${props.skill.icon} colored ${isHovered ? "" : "hide"}`}
          style={{ transition: "opacity 0.5s ease" }}
        ></i> */}
        <i ref={logoRef} className={props.skill.icon}></i>
      </div>
      <div className="skillName">
        {props.skill.name}
      </div>
    </div>
  )
}

export default SkillComponent
