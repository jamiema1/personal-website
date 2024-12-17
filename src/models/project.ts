/* eslint-disable max-len */
import { Skill, Skills } from "./skill"

interface Project {
  name: string,
  description: string,
  skills: Skill[]
}

export const ALL_PROJECTS: Project[] = [
  {
    name: "Boulder Tracker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.sql,
      Skills.aws,
      Skills.node,
    ]
  },
  {
    name: "Notifire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.reactNative,
      Skills.expo,
      Skills.javascript,
    ]
  },
  {
    name: "Minute Mood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
    ]
  },
  {
    name: "2048",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.python,
    ]
  },
  {
    name: "Minesweeper",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.java,
      Skills.jUnit,
    ]
  },
  {
    name: "Baseball Simulator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.cPlusPlus,
    ]
  },
  {
    name: "Predicting Heart Disease",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    skills: [
      Skills.r,
    ]
  },
]