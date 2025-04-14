/* eslint-disable max-len */
import { Skill, Skills } from "./skill"

interface Project {
  name: string,
  description: string,
  githubLink: string,
  skills: Skill[]
}

export const ALL_PROJECTS: Project[] = [
  {
    name: "Boulder Tracker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/boulder-tracker-v2",
    skills: [
      Skills.react,
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.mysql,
      Skills.aws,
      Skills.node,
    ]
  },
  {
    name: "Notifire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/Notifire",
    skills: [
      Skills.reactNative,
      Skills.expo,
      Skills.javascript,
    ]
  },
  {
    name: "Mining, Eh?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/Mining-Eh",
    skills: [
      Skills.javascript,
      Skills.css,
      Skills.html,
      Skills.d3,
    ]
  },
  {
    name: "Minute Mood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "http://github.com/jamiema1/Minute-Mood",
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
    githubLink: "http://github.com/jamiema1/2048",
    skills: [
      Skills.python,
    ]
  },
  {
    name: "Minesweeper",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/Minesweeper",
    skills: [
      Skills.java,
      Skills.jUnit,
    ]
  },
  {
    name: "Baseball Simulator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/Baseball-Simulator",
    skills: [
      Skills.cPlusPlus,
    ]
  },
  {
    name: "Predicting Heart Disease",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh risus. Aliquam blandit velit fermentum velit imperdiet mattis. Vestibulum suscipit efficitur nulla vel consequat. Quisque nisl lorem, tristique eu nibh ac, convallis auctor ex. Mauris nulla ante, ornare quis scelerisque nec, faucibus ut libero. Sed at bibendum urna, eget ornare leo. Ut vitae luctus ante. Pellentesque tempus risus ut blandit rutrum. Sed et turpis non erat sollicitudin porttitor in at libero. Mauris aliquam et lectus quis dapibus. Nullam at scelerisque magna. In tristique fringilla vestibulum. Aenean sagittis vehicula augue, rutrum tempor eros pellentesque a. Nunc dictum nisi quis egestas.",
    githubLink: "https://github.com/jamiema1/Predicting-Heart-Disease-with-KNN-Algorithm",
    skills: [
      Skills.r,
    ]
  },
]