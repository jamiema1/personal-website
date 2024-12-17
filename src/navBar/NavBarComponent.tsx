import React from "react"
import { SectionRefType } from "../App"
import {
  AboutSectionDisplayName,
  ExperienceSectionDisplayName,
  ProjectsSectionDisplayName,
  SkillsSectionDisplayName
} from "../pages/sectionsMessages"
import "./NavBar.scss"

interface NavBarProps {
  aboutSectionRef: React.RefObject<SectionRefType>,
  experienceSectionRef: React.RefObject<SectionRefType>,
  projectsSectionRef: React.RefObject<SectionRefType>,
  skillsSectionRef: React.RefObject<SectionRefType>
} 

const scrollToSection = (ref: React.RefObject<SectionRefType>) => {
  ref?.current?.scrollIntoView({ behavior: "smooth" })
}

const NavBarComponent: React.FC<NavBarProps> = (props) => {
  return (
    <nav className="navBar">
      <ul className="navBarItemList">
        <li
          className="navBarItem"
          onClick={() => scrollToSection(props.aboutSectionRef)}>
          {AboutSectionDisplayName}
        </li>
        <li
          className="navBarItem"
          onClick={() => scrollToSection(props.experienceSectionRef)}>
          {ExperienceSectionDisplayName}
        </li>
        <li
          className="navBarItem"
          onClick={() => scrollToSection(props.projectsSectionRef)}>
          {ProjectsSectionDisplayName}
        </li>
        <li
          className="navBarItem"
          onClick={() => scrollToSection(props.skillsSectionRef)}>
          {SkillsSectionDisplayName}
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent
