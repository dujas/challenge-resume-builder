import { UUID } from "short-uuid";

export type Resume = {
  uuid: UUID;
  candidateDetails?: CandidateDetails;
  templateId: UUID;
};

export type CandidateDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  experiences: Array<Experience>;
  education: Array<Education>;
  certifications: Array<Certification>;
  description: string;
  references: Array<string>;
  linkedin: string;
  skills: Array<Skill>;
};

export type Activity = {
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Experience = {
  title: string;
  company: string;
} & Activity;

type EducationUniversity = {
  degree: string;
  major: string;
  university: string;
  school?: never;
} & Activity;

type EducationSchool = {
  degree: string;
  major: string;
  school: string;
  university?: never;
} & Activity;

export type Education = EducationUniversity | EducationSchool;

export type Certification = {
  name: string;
  date: string;
};

export type Skill = {
  name: string;
  score: number;
};
