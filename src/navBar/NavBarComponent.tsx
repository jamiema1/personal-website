import React from "react"
import {SectionRefType} from "../App"
import {AboutSectionDisplayName, ExperienceSectionDisplayName, ProjectsSectionDisplayName, SkillsSectionDisplayName} from "../pages/pagesMessages"
import "./NavBar.scss"

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
      <div className="navBarItemList">
        <div
          className="navBarItem"
          onClick={() => scrollToSection(props.aboutMeSectionRef)}>
          {AboutSectionDisplayName}
        </div>
        <div
          className="navBarItem"
          onClick={() => scrollToSection(props.projectsSectionRef)}>
          {ProjectsSectionDisplayName}
        </div>
        <div
          className="navBarItem"
          onClick={() => scrollToSection(props.experienceSectionRef)}>
          {ExperienceSectionDisplayName}
        </div>
        <div
          className="navBarItem"
          onClick={() => scrollToSection(props.skillsSectionRef)}>
          {SkillsSectionDisplayName}
        </div>
      </div>
    </div>
  )
}

export default NavBarComponent
