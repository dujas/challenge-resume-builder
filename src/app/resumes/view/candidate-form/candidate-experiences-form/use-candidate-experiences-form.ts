import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume, Experience } from "@/app/resumes/domain/resume-entity";
import { dateRegex } from "../field.helpers";

type CandidateExperiences = { experiences: Array<Experience> };
const useCandidateExperiencesSchema = () => {
  const schema = z.object({
    experiences: z.array(
      z.object({
        title: z.string(),
        company: z.string(),
        description: z.string(),
        startDate: z
          .string()
          .optional()
          .refine((val) => val && dateRegex.test(val), {
            message: "Invalid date format, should be YYYY-MM-DD",
          }),
        endDate: z
          .string()
          .optional()
          .refine((val) => val && dateRegex.test(val), {
            message: "Invalid date format, should be YYYY-MM-DD",
          }),
        location: z.string(),
      }),
    ),
  });

  return schema;
};

const defaultValues: Experience = {
  title: "",
  company: "",
  description: "",
  startDate: "",
  endDate: "",
  location: "",
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const values: CandidateExperiences = {
    experiences: candidateDetails?.experiences ?? [defaultValues],
  };
  return values;
};

export const useCandidateExperiencesForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateExperiencesSchema();
  const formMethods = useForm<CandidateExperiences>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { append, fields, remove } = useFieldArray({
    name: "experiences",
    control: formMethods.control,
  });

  const onSubmit = (data: CandidateExperiences) => {
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
    onSubmit,
    formMethods,
    append,
    fields,
    remove,
    defaultValues,
  };
};
