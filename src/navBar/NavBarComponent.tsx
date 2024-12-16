import React from "react"
import {SectionRefType} from "../App"
import {AboutSectionDisplayName, ExperienceSectionDisplayName, ProjectsSectionDisplayName, SkillsSectionDisplayName} from "../pages/pagesMessages"
import "./NavBar.css"

interface NavBarProps {
  aboutMeSectionRef: React.RefObject<SectionRefType>,
  projectsSectionRef: React.RefObject<SectionRefType>,
  experienceSectionRef: React.RefObject<SectionRefType>,
  skillsSectionRef: React.RefObject<SectionRefType>
} 

const scrollToSection = (ref: React.RefObject<SectionRefType>) => {
  ref?.current?.scrollIntoView({behavior: "smooth"})
}

const NavBarComponent: React.FC<NavBarProps> = (props) => {
  return (
    <div className="navBar">
      <ul className="navBarSectionList">
        <li onClick={() => scrollToSection(props.aboutMeSectionRef)}>
          {AboutSectionDisplayName}
        </li>
        <li onClick={() => scrollToSection(props.projectsSectionRef)}>
          {ProjectsSectionDisplayName}
        </li>
        <li onClick={() => scrollToSection(props.experienceSectionRef)}>
          {ExperienceSectionDisplayName}
        </li>
        <li onClick={() => scrollToSection(props.skillsSectionRef)}>
          {SkillsSectionDisplayName}
        </li>
      </ul>
    </div>
  )
}

export default NavBarComponent
