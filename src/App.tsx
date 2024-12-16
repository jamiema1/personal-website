import React, {useRef} from "react"
import NavBarComponent from "./navBar/NavBarComponent"
import SectionsComponent from "./pages/SectionsComponent"
import "./App.scss"

export type SectionRefType = HTMLDivElement | null

const App: React.FC = () => {

  const projectsSectionRef = useRef<SectionRefType>(null)
  const experienceSectionRef = useRef<SectionRefType>(null)
  const skillsSectionRef = useRef<SectionRefType>(null)
  const aboutSectionRef = useRef<SectionRefType>(null)

  return (
    <div className="App">
      <NavBarComponent
        aboutSectionRef={aboutSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
        skillsSectionRef={skillsSectionRef}
      />
      <SectionsComponent
        aboutSectionRef={aboutSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
        skillsSectionRef={skillsSectionRef}
      />
      {/* <div>Footer</div> TODO: jma - add a footer */}
    </div>
  )
}

export default App
