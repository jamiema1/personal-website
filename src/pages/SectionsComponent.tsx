import React from "react"
import { SectionRefType } from "../App"
import {
  AboutSectionDisplayName,
  ExperienceSectionDisplayName,
  ProjectsSectionDisplayName,
  SkillsSectionDisplayName
} from "./sectionsMessages"
import AboutSectionComponent from "./aboutSection/AboutSectionComponent"
import ExperienceSectionComponent from "./experienceSection/ExperienceSectionComponent"
import SkillsSectionComponent from "./skillsSection/SkillsSectionComponent"
import ProjectsSectionComponent from "./projectsSection/ProjectsSectionComponent"
import "./Sections.scss"

interface SectionsProps {
  aboutSectionRef: React.RefObject<SectionRefType>,
  experienceSectionRef: React.RefObject<SectionRefType>,
  projectsSectionRef: React.RefObject<SectionRefType>,
  skillsSectionRef: React.RefObject<SectionRefType>
} 

const SectionsComponent: React.FC<SectionsProps> = (props) => {
  return (
    <div className="sections">
      <div
        className="section"
        ref={props.aboutSectionRef}>
        <h1 className="sectionHeader">
          {AboutSectionDisplayName}
        </h1>
        <AboutSectionComponent />
      </div>
      <div 
        className="section"
        ref={props.experienceSectionRef}>
        <h1 className="sectionHeader">
          {ExperienceSectionDisplayName}
        </h1>
        <ExperienceSectionComponent />
      </div>
      <div
        className="section"
        ref={props.projectsSectionRef}>
        <h1 className="sectionHeader">
          {ProjectsSectionDisplayName}
        </h1>
        <ProjectsSectionComponent />
      </div>
      <div className="section"
        ref={props.skillsSectionRef}>
        <h1 className="sectionHeader">
          {SkillsSectionDisplayName}
        </h1>
        <SkillsSectionComponent />
      </div>

    </div>
  )
}

export default SectionsComponent
