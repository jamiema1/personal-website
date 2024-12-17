export interface Skill {
  name: string
}

export class Skills {
  static readonly javascript: Skill = {
    name: "JavaScript"
  }

  static readonly typescript: Skill = {
    name: "TypeScript"
  }

  static readonly css: Skill = {
    name: "CSS"
  }

  static readonly html: Skill = {
    name: "HTML"
  }

  static readonly scala: Skill = {
    name: "Scala"
  }

  static readonly python: Skill = {
    name: "Python"
  }

  static readonly react: Skill = {
    name: "React"
  }

  static readonly angular: Skill = {
    name: "Angular"
  }

  static readonly less: Skill = {
    name: "LESS"
  }

  static readonly sql: Skill = {
    name: "SQL"
  }

  static readonly java: Skill = {
    name: "Java"
  }

  static readonly cPlusPlus: Skill = {
    name: "C++"
  }

  static readonly r: Skill = {
    name: "R"
  }

  static readonly aws: Skill = {
    name: "AWS"
  }

  static readonly node: Skill = {
    name: "Node.js"
  }

  static readonly jUnit: Skill = {
    name: "JUnit"
  }

  static readonly reactNative: Skill = {
    name: "React Native"
  }

  static readonly expo: Skill = {
    name: "Expo"
  }
}


export const ALL_SKILLS: Skill[] = [
  Skills.javascript,
  Skills.typescript,
  Skills.css,
  Skills.html,
  Skills.scala,
  Skills.python,
  Skills.react,
  Skills.angular,
  Skills.less,
  Skills.sql,
  Skills.java,
  Skills.cPlusPlus,
  Skills.r,
  Skills.aws,
  Skills.node,
  Skills.jUnit,
  Skills.reactNative,
  Skills.expo,
]