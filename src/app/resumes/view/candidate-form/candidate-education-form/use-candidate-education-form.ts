import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import useResumeStore from "@/app/resumes/data/resume.service";
import useGetResumeById from "@/app/resumes/view/use-get-resume-by-id";
import { Resume, Education } from "@/app/resumes/domain/resume-entity";
import { dateRegex } from "../field.helpers";

type CandidateEducation = { education: Array<Education> };
const useCandidateEducationSchema = () => {
  const schema = z.object({
    education: z.array(
      z.object({
        degree: z.string(),
        major: z.string(),
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
        university: z.string(),
      }),
    ),
  });

  return schema;
};

const defaultValues: Education = {
  degree: "",
  major: "",
  description: "",
  startDate: "",
  endDate: "",
  location: "",
  university: "",
};

const resolveDefaultValues = (resume?: Resume) => {
  const candidateDetails = resume?.candidateDetails;
  const values: CandidateEducation = {
    education: candidateDetails?.education ?? [defaultValues],
  };
  return values;
};

export const useCandidateEducationForm = () => {
  const resume = useGetResumeById();
  const updateResumeById = useResumeStore((x) => x.updateResumeById);
  const schema = useCandidateEducationSchema();
  const formMethods = useForm<CandidateEducation>({
    defaultValues: resolveDefaultValues(resume),
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { append, fields, remove } = useFieldArray({
    name: "education",
    control: formMethods.control,
  });

  const onSubmit = (data: CandidateEducation) => {
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
