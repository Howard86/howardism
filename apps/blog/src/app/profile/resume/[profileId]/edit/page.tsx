import type { Prisma } from "@prisma/client"

import ResumeEditor from "../../ResumeEditor"
import type { ResumeSchema } from "../../schema"
import { type RawResume, type ResumeProfilePageProps, getResumeById } from "../page"

const generateDateISOString = (date: Date | null) =>
  date ? date.toISOString().substring(0, 10) : ""
const generateArrayStrings = (items: Prisma.JsonValue) =>
  Array.isArray(items) ? items.join("\n") : ""

const mapResumeToResumeSchema = (resume: RawResume): ResumeSchema => ({
  name: resume.applicant.name,
  address: resume.applicant.address,
  phone: resume.applicant.phone,
  email: resume.applicant.email,
  github: resume.applicant.github,
  website: resume.applicant.website,

  company: resume.company,
  position: resume.position,
  summary: resume.summary,

  experiences: resume.experiences.map((experience) => ({
    company: experience.company,
    location: experience.location,
    title: experience.title,
    size: experience.size,
    startDate: generateDateISOString(experience.startDate),
    endDate: generateDateISOString(experience.endDate),
    items: generateArrayStrings(experience.responsibilities),
  })),

  projects: resume.projects.map((project) => ({
    title: project.title,
    subtitle: project.subtitle,
    items: generateArrayStrings(project.descriptions),
  })),

  educations: resume.educations.map((education) => ({
    facility: education.facility,
    degree: education.degree,
    location: education.location,
    startDate: generateDateISOString(education.startDate),
    endDate: generateDateISOString(education.endDate),
    items: generateArrayStrings(education.subjects),
  })),

  skills: resume.skills.map((skill) => ({
    title: skill.title,
    items: generateArrayStrings(skill.items),
  })),

  languages: resume.languages.map((language) => ({
    name: language.name,
    proficiency: language.proficiency,
  })),
})

export default async function EditResumePage({ params: { profileId } }: ResumeProfilePageProps) {
  const resume = await getResumeById(profileId)

  return <ResumeEditor profileId={profileId} resume={mapResumeToResumeSchema(resume)} />
}
