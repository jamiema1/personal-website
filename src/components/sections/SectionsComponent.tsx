import React from "react"

import { SectionRefType } from "@components/app/App"
import AboutSectionComponent from "@components/sections/aboutSection/AboutSectionComponent"
import ExperienceSectionComponent from "@components/sections/experienceSection/ExperienceSectionComponent"
import ProjectsSectionComponent from "@components/sections/projectsSection/ProjectsSectionComponent"
import SkillsSectionComponent from "@components/sections/skillsSection/SkillsSectionComponent"

import {
  AboutSectionDisplayName,
  ExperienceSectionDisplayName,
  ProjectsSectionDisplayName,
  SkillsSectionDisplayName
} from "@messages/messages"

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
      {/* <div className="section"
        ref={props.skillsSectionRef}>
        <h1 className="sectionHeader">
          {SkillsSectionDisplayName}
        </h1>
        <SkillsSectionComponent />
      </div> */}

    </div>
  )
}

export default SectionsComponent
