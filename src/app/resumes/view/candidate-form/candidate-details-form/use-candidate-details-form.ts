import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import { CandidateDetails } from "@/app/resumes/domain/resume-entity";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume } from "@/app/resumes/domain/resume-entity";
import { phoneNumberRegex } from "../field.helpers";

type CandidateHeaderInfo = Pick<
  CandidateDetails,
  "firstName" | "lastName" | "email" | "address" | "phoneNumber" | "linkedin"
>;
const useCandidateDetailsSchema = () => {
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email().optional(),
    address: z.string().optional(),
    phoneNumber: z
      .string()
      .optional()
      .refine((val) => val && phoneNumberRegex.test(val), {
        message: "Invalid phone number format",
      }),
    linkedin: z.string().url().optional(),
  });

  return schema;
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const defaultValues: CandidateHeaderInfo = {
    firstName: candidateDetails?.firstName ?? "",
    lastName: candidateDetails?.lastName ?? "",
    email: candidateDetails?.email ?? "",
    address: candidateDetails?.address ?? "",
    phoneNumber: candidateDetails?.phoneNumber ?? "",
    linkedin: candidateDetails?.linkedin ?? "",
  };
  return defaultValues;
};

export const useCandidateDetailsForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateDetailsSchema();
  const formMethods = useForm<CandidateHeaderInfo>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: CandidateHeaderInfo) => {
    if (resume?.uuid) {
      updateResumeById(resume.uuid, {
        ...resume,
        candidateDetails: {
          ...resume.candidateDetails,
          ...data,
        } as Resume["candidateDetails"],
      });
    }
  };

  return {
    onSubmit, //formMethods.handleSubmit(onSubmit),
    formMethods,
  };
};
