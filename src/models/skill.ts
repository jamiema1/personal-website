export interface Skill {
  name: string
  icon?: string
}

export class Skills {
  static readonly git: Skill = {
    name: "Git",
    icon: "devicon-git-plain"
  }

  static readonly vscode: Skill = {
    name: "VS Code",
    icon: "devicon-vscode-plain"
  }
 
  static readonly intellij: Skill = {
    name: "IntelliJ",
    icon: "devicon-intellij-plain"
  }

  static readonly javascript: Skill = {
    name: "JavaScript",
    icon: "devicon-javascript-plain"
  }

  static readonly typescript: Skill = {
    name: "TypeScript",
    icon: "devicon-typescript-plain"
  }

  static readonly css: Skill = {
    name: "CSS",
    icon: "devicon-css3-plain"
  }

  static readonly html: Skill = {
    name: "HTML",
    icon: "devicon-html5-plain"
  }

  static readonly scala: Skill = {
    name: "Scala",
    icon: "devicon-scala-plain"
  }

  static readonly python: Skill = {
    name: "Python",
    icon: "devicon-python-plain"
  }

  static readonly react: Skill = {
    name: "React",
    icon: "devicon-react-original"
  }

  static readonly angular: Skill = {
    name: "Angular",
    icon: "devicon-angularjs-plain"
  }

  static readonly less: Skill = {
    name: "LESS",
    icon: "devicon-less-plain-wordmark"
  }

  static readonly sass: Skill = {
    name: "SASS",
    icon: "devicon-sass-original"
  }

  static readonly tailwind: Skill = {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original"
  }

  static readonly mysql: Skill = {
    name: "MySQL",
    icon: "devicon-mysql-original"
  }

  static readonly java: Skill = {
    name: "Java",
    icon: "devicon-java-plain"
  }

  static readonly cPlusPlus: Skill = {
    name: "C++",
    icon: "devicon-cplusplus-plain"
  }

  static readonly r: Skill = {
    name: "R",
    icon: "devicon-r-plain"
  }

  static readonly aws: Skill = {
    name: "AWS",
    icon: "devicon-amazonwebservices-plain-wordmark"
  }

  static readonly node: Skill = {
    name: "Node.js",
    icon: "devicon-nodejs-plain"
  }

  static readonly jUnit: Skill = {
    name: "JUnit",
    icon: "devicon-junit-plain"
  }

  static readonly reactNative: Skill = {
    name: "React Native"
  }

  static readonly expo: Skill = {
    name: "Expo"
  }

  static readonly powerBI: Skill = {
    name: "Power BI"
  }

  static readonly powerAutomate: Skill = {
    name: "Power Automate"
  }

  static readonly d3: Skill = {
    name: "D3",
    icon: "devicon-d3js-plain"
  }
}

export const ALL_SKILLS: Skill[] = [
  Skills.git,
  Skills.vscode,
  Skills.intellij,
  Skills.javascript,
  Skills.typescript,
  Skills.css,
  Skills.html,
  Skills.scala,
  Skills.python,
  Skills.react,
  Skills.angular,
  Skills.less,
  Skills.sass,
  Skills.tailwind,
  Skills.mysql,
  Skills.java,
  Skills.cPlusPlus,
  Skills.r,
  Skills.aws,
  Skills.node,
  Skills.jUnit,
  Skills.reactNative,
  Skills.expo,
  Skills.powerBI,
  Skills.powerAutomate,
  Skills.d3,
]