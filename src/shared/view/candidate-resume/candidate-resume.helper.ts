import { CandidateDetails } from "@/app/resumes/domain/resume-entity";
import DummyData from "@/shared/fixtures/candidateDetails.json";
import { HeaderProps } from "../layoutBlocksPDF/layoutBlocks";

const getHeader = (data: CandidateDetails): HeaderProps => ({
  firstName: data.firstName ?? "",
  lastName: data.lastName ?? "",
  email: data.email ?? "",
  phoneNumber: data.phoneNumber ?? "",
  address: data.address ?? "",
  linkedin: data.linkedin ?? "",
});

const getDescription = (data: CandidateDetails) => data.description;
const getExperiences = (data: CandidateDetails) => data.experiences;
const getEducation = (data: CandidateDetails) => data.education;
const getCertifications = (data: CandidateDetails) => data.certifications;
const getSkills = (data: CandidateDetails) => data.skills;

const defaultData = {
  header: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    linkedin: "",
  },
  primary: {
    description: "",
    experiences: [],
    education: [],
  },
  secondary: {
    certifications: [],
    skills: [],
  },
};

type GetCandidateDetailsProps = {
  isDummy?: boolean;
  candidateDetails?: CandidateDetails;
};

type OutputGetCandidateDetails = {
  header: HeaderProps;
  primary: {
    description: CandidateDetails["description"];
    experiences: CandidateDetails["experiences"];
    education: CandidateDetails["education"];
  };
  secondary: {
    certifications: CandidateDetails["certifications"];
    skills: CandidateDetails["skills"];
  };
};
export const getCandidateDetails = ({
  isDummy,
  candidateDetails,
}: GetCandidateDetailsProps): OutputGetCandidateDetails => {
  const data = isDummy ? DummyData : candidateDetails;
  if (!data) return defaultData;
  return {
    header: getHeader(data),
    primary: {
      description: getDescription(data) ?? "",
      experiences: getExperiences(data) ?? [],
      education: getEducation(data) ?? [],
    },
    secondary: {
      certifications: getCertifications(data) ?? [],
      skills: getSkills(data) ?? [],
    },
  };
};
