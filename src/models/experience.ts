/* eslint-disable max-len */
import { Skill, Skills } from "./skill"

export interface Experience {
  position: string,
  companyName: string,
  description: string,
  startDate: Date,
  endDate?: Date, // undefined means a current employment
  skills: Skill[]
}

export const ALL_EXPERIENCES: Experience[] = [
  {
    position: "Software Developer Co-op",
    companyName: "Visier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 11),
    skills: [
      Skills.angular,
      Skills.typescript,
      Skills.css,
      Skills.html,
      Skills.scala,
      Skills.less,
    ]
  },
  {
    position: "Global Talent Technology Co-op",
    companyName: "Teck Resources",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 11),
    skills: [
      Skills.python,
    ]
  },
  {
    position: "Undergraduate Teaching Assistant",
    companyName: "University of British Columbia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    startDate: new Date(2022, 0),
    endDate: new Date(2023, 3),
    skills: []
  },
]