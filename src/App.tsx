import React, {useRef} from "react"
import {
  AboutSectionDisplayName,
  ExperienceSectionDisplayName,
  ProjectsSectionDisplayName,
  SkillsSectionDisplayName
} from "./pages/pagesMessages"
import AboutSectionComponent from "./pages/aboutSection/AboutSectionComponent"
import NavBarComponent from "./navBar/NavBarComponent"

export type SectionRefType = HTMLElement | null

function App() {

  const projectsSectionRef = useRef<SectionRefType>(null)
  const experienceSectionRef = useRef<SectionRefType>(null)
  const skillsSectionRef = useRef<SectionRefType>(null)
  const aboutMeSectionRef = useRef<SectionRefType>(null)

  return (
    <div className="App">
      <NavBarComponent
        projectsSectionRef={projectsSectionRef}
        experienceSectionRef={experienceSectionRef}
        skillsSectionRef={skillsSectionRef}
        aboutMeSectionRef={aboutMeSectionRef}
      />
      <div className="section-list">
        <section ref={aboutMeSectionRef}>
          <AboutSectionComponent />
        </section>
        <section ref={experienceSectionRef}>
          <h1>{ExperienceSectionDisplayName}</h1>
        </section>
        <section ref={projectsSectionRef}>
          <h1>{ProjectsSectionDisplayName}</h1>
        </section>
        <section ref={skillsSectionRef}>
          <h1>{SkillsSectionDisplayName}</h1>
        </section>

      </div>
    </div>
  )
}

export default App
