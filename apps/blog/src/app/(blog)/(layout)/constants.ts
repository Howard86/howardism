export enum SectionId {
  Home = "home",
  About = "about",
  Experience = "experience",
  Resource = "resource",
}

export const SECTION_IDS = Object.values(SectionId)

export const SECTION_KEYS = Object.keys(SectionId) as (keyof typeof SectionId)[]

export enum NavSection {
  Home = "/",
  Articles = "/articles",
  App = "/profile",
  Tools = "/tools",
}

export const NAV_SECTION_KEYS = Object.keys(NavSection) as (keyof typeof NavSection)[]
